import React from 'react'
import {NavLink, Routes, Route } from 'react-router-dom'
import AccountsDetail from './AccountsDetail'
import Security from './Security'
import Notifications from './Notifications'
import PaymentMethods from './PaymentMethods'

const isNotActiveStyle = 'flex items-center px-3 gap-3 text-gray-500 hover:bg-gray-100 hover:text-black transition-all duration-200 ease-in-out capiatlize';
const isActiveStyle = 'flex items-center px-3 gap-3 font-extrabold  hover:bg-gray-100 transition-all duration-200 ease-in-out capiatlize';


const UserProfile = () => {
  return (
    <div className='flex flex-row justify-center pt-10 bg-gray-100'>
        <div className='w-48 flex flex-col flex-start'>
                <NavLink
                  to="/"
                  className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                  // onClick={() => closeToggle && closeToggle(false)}
                >
                  Accounts
                </NavLink>
                <NavLink
                  to="/security"
                  className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                  // onClick={() => closeToggle && closeToggle(false)}
                >
                  Security
                </NavLink>
                <NavLink
                  to="/notifications"
                  className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                  // onClick={() => closeToggle && closeToggle(false)}
                >
                  Notifications
                </NavLink>
                <NavLink
                  to="/payment-methods"
                  className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                  // onClick={() => closeToggle && closeToggle(false)}
                >
                  Payment Methods
                </NavLink>
        </div>
        <div className='w-3/6 bg-white rounded-md border outline-none '>
          <Routes>
            <Route path='/' element={<AccountsDetail/>}/>
            <Route path='/security' element={<Security/>}/>
            <Route path='/notifications' element={<Notifications/>}/>
            <Route path='/payment-methods' element={<PaymentMethods/>}/>
          </Routes>
        </div>
    </div>
  )
}

export default UserProfile