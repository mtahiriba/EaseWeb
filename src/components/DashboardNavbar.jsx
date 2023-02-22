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
            
            <div className='flex flex-row justify-center items-center gap-4'>
                <Link
                  to="/"
                  className='hidden md:block text-green-500 font-bold text-md hover:text-green-500'
                >
                  <span>Switch to Development</span>
                </Link>
                <DropDownUserProfile user={user} setUser={setUser} setOption={setOption}/>
              </div>
        </div>
    </nav>
  )
}

export default DashboardNavbar