import React from 'react'
import HomeNavbar from './HomeNavbar'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
  <div className="bg-gray-100">
    <HomeNavbar />
    <div className="container h-96 flex justify-center"> 
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Build Your Own Website</h1>
        <p className="text-lg">Create a professional-looking website for your business in minutes</p>
        <Link to="/register" className="bg-green-500 hover:bg-green-600 text-white py-2 flex justify-center items-center rounded mt-8 w-32">Get Started</Link>
      </div>
    </div>
  </div>
  )
}

export default Header