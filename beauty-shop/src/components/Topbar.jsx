import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Topbar() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>Yerasylzhan</span>
                <span className='text-slate-600'>Shop</span>
            </h1>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
                <input type='text' placeholder='Поиск...' 
                className='bg-transparent focus:outline-none w-24 sm:w-64' />
                <FaSearch className='text-slate-600' />
            </form>
            <ul className='flex gap-4'>
                <Link to='/'>
                    <li className='hidden sm:inline text-slate-700 hover-underline'>Главная</li>
                </Link>
                <Link to='/about'>
                    <li className='hidden sm:inline text-slate-700 hover-underline'> О нас</li>
                </Link>
                <Link to='/login'>
                    <li className='sm:inline text-slate-700 hover-underline'>Войти</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}
