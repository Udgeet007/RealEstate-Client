import React from 'react'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import {app} from '../firebase.jsx';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/userSlice/userSlice';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleGoogleSubmit = async() =>{
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup( auth, provider);
      console.log(result);
      const data = await fetch('http://localhost:9000/api/auth/google',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:{
          name: result.user.displayName,
          email:result.user.email,
          photo:result.user.photoURL,
        }
      })
      const res = await data.json();
      dispatch(signInSuccess(res))
      toast.success("Google Login Successfull", {
        position:'top-right',
        theme:'light'
      });
      navigate('/');
    } catch (error) {
      console.log(`Could Not Sign up : ${error}`)
    }
  }
  return (
      <button onClick={handleGoogleSubmit} className='bg-red-700 uppercase p-3 text-white rounded-lg hover:opacity-90'>Continue With Google</button>
  )
}

export default OAuth
