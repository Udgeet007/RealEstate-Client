import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home  from './pages/Home';
import About from "./pages/About";
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import Header from "./components/Header";
  import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
    </Routes>
    <ToastContainer/>
    </BrowserRouter>
    </>
  )
}

export default App
