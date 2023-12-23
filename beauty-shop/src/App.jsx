import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Login from "./pages/Login"
import Logout from "./pages/Logout"
import Main from "./pages/Main"
import Topbar from "./components/Topbar"

export default function App() {
  return <BrowserRouter>
  <Topbar/>
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/login" element={<Login />} />
    <Route path="/logout" element={<Logout />} />
  </Routes>
  </BrowserRouter>
}
