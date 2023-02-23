import React from 'react'
import Pin from './pin'
import { WEBSITES } from '../shared/Websites'

const DesignWebsiteDashboard = () => {
  return (
    <div className='w-full'>
        <div className='flex justify-between mt-7'>
            <span className='flex items-center font-sans text-3xl text-gray-800 font-bold '>WEBSITE LIST</span>
            <button 
                type='button'
                className='bg-green-500 text-white px-7 py-2 mr-2 rounded-md font-semibold text-base outline-none hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'
            >
                Create New Website
            </button>
        </div>

        <div className='mt-7 flex flex-wrap gap-5'>
            {WEBSITES.map((website) => <Pin website={website} />)}
        </div>
    </div>
  )
}

export default DesignWebsiteDashboard