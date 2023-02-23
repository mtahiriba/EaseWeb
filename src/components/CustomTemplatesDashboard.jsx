import React from 'react'
import Pin from './pin'
import {SECTIONS} from '../shared/Sections'

const CustomTemplatesDashboard = () => {
  return (
    <div className='w-full'>
        <div className='flex justify-between mt-7'>
            <span className='flex items-center font-sans text-3xl text-gray-800 font-bold '>SECTIONS LIST</span>
            <button 
                type='button'
                className='bg-green-500 text-white px-7 py-2 mr-2 rounded-md font-semibold text-base outline-none hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'
            >
                Create New Section
            </button>
        </div>
        <div className='mt-7 flex flex-wrap gap-5'>
            {SECTIONS.map((section) => <Pin website={section} />)}
        </div>
    </div>
  )
}

export default CustomTemplatesDashboard