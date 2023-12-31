import {useEffect, useRef, useState} from 'react';
import { useSelector } from 'react-redux';
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage';
import { app } from '../firebase';


export default function Profile() {
  const {currentUser} = useSelector((state) => state.user);
  const fileRef = useRef(null);
  const[file, setFile] = useState(undefined);
  const[fileError, setFileError] = useState(false);
  const[filePerc, setFilePerc] = useState(0);
  const[formData, setFormData] = useState({});
  console.log(formData);

  useEffect(() => {
    if(file) {
      handleFileUpload(file);
    }
  }, [file]);
  
  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        setFileError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then
        ((downloadURL) => {
          setFormData({...formData, avatar: downloadURL});
        })
      },
    )
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Профиль</h1>
      <form className='flex flex-col'>
        <input onChange={(e) => setFile(e.target.files[0])} type='file' ref={fileRef} hidden accept='image/*'/>
        <img onClick={() => fileRef.current.click()} src={formData.avatar || currentUser.avatar} alt='profile'
        className='rounded-full h-24 w-24 object-cover cursor-pointer
        self-center mt-2'/>
        <p className='text-sm self-center'>
        {fileError ? 
        (<span className='text-red-700'>Ошибка (картинка должна быть меньше 2 МГ)</span>) :
        filePerc > 0 && filePerc < 100 ? 
        (<span className='text-slate-700'>{`Загрузка ${filePerc}%`}</span>)
          :
          filePerc === 100 ? 
            (<span className='text-green-700'>Аватарка успешно обновлена!</span>)
          :
          ("")
        }
        </p>
        <input type='text' placeholder='username' 
        id='username' className='border p-3 rounded-lg'/>
        <input type='email' placeholder='email' 
        id='email' className='border p-3 rounded-lg'/>
        <input type='text' placeholder='password' 
        id='password' className='border p-3 rounded-lg'/>
        <button className='bg-slate-600 text-white rounded-lg p-3
        uppercase hover:opacity-95 disabled:opacity-80'>Обновить</button>
      </form>

      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Удалить</span>
        <span className='text-red-700 cursor-pointer'>Выйти</span>
      </div>
    </div>  
  )
}
