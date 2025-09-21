import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { signInFailure, signInSuccess, signInStart } from '../redux/userSlice/userSlice';

const SignIn = () => {
  const [formData, setFormData] = useState({});
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  const {loading, error} = useSelector((state) => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setLoading(true);
      dispatch(signInStart());
      const res = await fetch("http://localhost:9000/api/auth/signin", {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      // console.log('Udgeet', data);
      if (data.success === false) {
      // setLoading(false);
      // setError(data.message);
      dispatch(signInFailure(data.message));
      return;
    }
    // setLoading(false);
    // setError(null);
    dispatch(signInSuccess(data));
    toast.success('Login Successfully', {
      position:'top-right',
      theme:'light'
    });
    navigate('/');
    } catch (error) {
      toast.error(`Error in Login  Account: ${error.message}`, {
        position: "top-right",
        theme: "colored",
      });
      // setLoading(true);
      // setError(error.message);
      dispatch(signInFailure(error.message))
      console.log("Error :", error);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">SignUp </h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border p-3 rounded-lg"
          id="email"
          placeholder="email"
          onChange={handleChange}
        />
        <input
          type="password"
          className="border p-3 rounded-lg"
          id="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account? </p>
        <Link to="/signup" className="text-blue-700">
          Sign up
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};


export default SignIn
