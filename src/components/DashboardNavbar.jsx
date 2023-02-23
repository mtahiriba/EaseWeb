import React, {useEffect} from 'react'
import logo from '../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import DropDownUserProfile from './DropDownUserProfile'

function DashboardNavbar({setUser, setOption}) {

  const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear()

  const navigate = useNavigate();


  return (
    <nav className="bg-white md:px-20 px-5 py-3 border-2">
        <div className="flex flex-wrap items-center justify-between">
            <Link
              to="/"
              onClick={() => setOption('dashboard')}
            >
              <img src={logo} width="130px" alt='logo' className=''/>
            </Link>
            
            <div className='flex flex-row justify-center items-center gap-10'>
                <Link
                  to="/"
                  className='hidden md:block text-green-500 font-bold text-md hover:text-green-500'
                >
                  <button type="button" className="relative inline-flex items-center p-1  text-center text-black ">
                    <svg className="w-7 h-7" aria-hidden="true" fill="currentColor" viewBox="0 1 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"></path>
                      
                    </svg>
                    <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-green-500 border-white rounded-full -top-2 -right-2 dark:border-gray-900">1</div>
                  </button>
                </Link>
                <DropDownUserProfile user={user} setUser={setUser} setOption={setOption}/>
              </div>
        </div>
    </nav>
  )
}

export default DashboardNavbar