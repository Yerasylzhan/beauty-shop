import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Topbar from "./components/Topbar";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return <BrowserRouter>
  <Topbar/>
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/about" element={<About />} />
    <Route element={<PrivateRoute />} >
      <Route path="/profile" element={<Profile />} />
    </Route>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/logout" element={<Logout />} />
  </Routes>
  </BrowserRouter>
}
