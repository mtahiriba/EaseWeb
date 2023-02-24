import React, {useState} from 'react'
import Pin from './pin'
import {SECTIONS} from '../shared/Sections'

const CustomTemplatesDashboard = () => {

    const [customToggle, setCustomToggle] = useState(false)

    const handleCustomSection = () => {
        setCustomToggle(!customToggle)
    }

  return (
    <div className='w-full'>
        <div className='flex justify-between mt-7'>
            <span className='flex items-center font-sans text-3xl text-gray-800 font-bold '>SECTIONS LIST</span>
            <button 
                type='button'
                className='bg-green-500 text-white px-7 py-2 mr-2 rounded-md font-semibold text-base outline-none hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'
                onClick={handleCustomSection}
            >
                Create New Section
            </button>
        </div>
        <div className='mt-7 flex flex-wrap gap-5'>
            {SECTIONS.map((section) => <Pin website={section} />)}
        </div>

        {customToggle && (
            <div className='absolute flex flex-col justify-center items-center top-0 left-0 right-0 buttom-0 bg-blackOverlay h-full gap-3'>
                <div className='flex-col md:w-2/5 w-5/6 h-auto flex items-center rounded-lg  bg-white border border-green-500'>
                    <div className='w-full bg-green-500 px-7 py-3 rounded-t-lg shadow-md'>
                        <span className='text-2xl font-bold text-white'>Create New Section</span>
                    </div>
                    <div className='w-full h-96 flex justify-center items-center'>
                        Form
                    </div>
                    <div className='py-3 border-t w-full px-7 flex justify-end items-center'>
                        <button
                            type='button'
                            className='bg-green-500 text-white px-10 py-2 rounded-md font-semibold text-base outline-none hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'
                            onClick={handleCustomSection}
                        >
                            Close
                        </button>
                    </div> 
                </div>
            </div>
        )}
    </div>
  )
}

export default CustomTemplatesDashboard