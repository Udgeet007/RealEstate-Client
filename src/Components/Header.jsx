import React from 'react'
import { FaSearch } from 'react-icons/fa'
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux'

const Header = () => {
  const {currentUser} = useSelector((state) => state.user)
  // console.log(currentUser, 'Udgeet Bhatt');
   
  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-gray-500'>Bloom</span>
        <span className='text-gray-700 ml-1'>Real Estate</span>
        </h1>
        </Link>
     
      <form className='bg-slate-100 p-3 rounded-lg flex justify-between items-center'>
        <input type='text' placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
        <FaSearch/>
      </form>
      <ul className='flex gap-4 justify-center items-center'>
      <Link to='/'><li className='hidden sm:inline  text-slate-700 hover:underline'>Home</li></Link>
       <Link to='/about'><li className='hidden sm:inline  text-slate-700 hover:underline'>About</li></Link> 
       {
        currentUser ?  <Link to='/profile'><img src={currentUser?.avatar} alt='profile' className='w-12 h-12 rounded-4xl'/> </Link>
        : 
      <Link to='/signin'> <li className='text-slate-700 hover:underline'>Sign in</li></Link> 
    }
    
      </ul>
       </div>
    </header>
  )
}

export default Header
