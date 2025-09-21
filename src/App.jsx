import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home  from './Pages/Home';
import About from "./Pages/About";
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import Header from "./Components/Header";
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
