import React from 'react'
import Navbar from '../components/Navbar'

const Header = () => {
  return (
    <div className='flex flex-col'>
        <Navbar />
        <div className='flex justify-center items-center h-96'>
            <button
                type='button'
                className='bg-green-500 text-white px-6 py-2 rounded-md text-lg font-bold text-base outline-none  hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'
                // onClick={Register}
            >
                Build a site
            </button>
        </div>
    </div>
  )
}

export default Header