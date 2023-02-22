import React from 'react'
import logo from '../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'


const HomeNavbar = () => {

    const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear()
    const navigate = useNavigate();

    const join = () => {
        navigate('/register', {replace: true})
    }

  return (
    <nav className="bg-gray-50 shadow-lg md:px-20 px-5 py-3">
        <div className="flex flex-wrap items-center justify-between">
            <img src={logo} width="130px" alt='logo' className=''/>
            {!user && (
              <div className='flex items-center gap-4'>
                <Link
                  to="/login"
                  className='hidden md:block text-neutral-600 font-bold text-md hover:text-green-500'
                >
                  <span> Sign in</span>
                </Link>
                
                <button
                  type='button'
                  className='md:block hidden text-green-500 font-bold text-md hover:bg-green-500 hover:text-white border   w-20 h-10 rounded-md border-green-500'  
                  onClick={join}
                >
                  Join
                </button>

                <Link
                  to="/login"
                  className='block md:hidden text-neutral-600 font-bold text-md hover:text-green-500'
                >
                  <span>Join</span>
                </Link>
              </div>
            )}
        </div>
    </nav>
  )
}

export default HomeNavbar