import React, {useState, useEffect} from 'react'
import Pin from './pin'
import {SECTIONS} from '../shared/Sections'
import Masonry from 'react-masonry-css'
import Spinner from './Spinner'

const breakpointObj = {
    default: 4,
    3000: 5,
    2000: 4,
    1200: 3,
    1000: 2,
    500: 1
  
  }

const CustomTemplatesDashboard = ({setSectionNum}) => {

    const [customToggle, setCustomToggle] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleCustomSection = () => {
        setCustomToggle(!customToggle)
    }

    useEffect(() => {
      setSectionNum(SECTIONS.length)
    }, [setSectionNum])
    
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

  return (
    <div className='w-full'>
        <div className='flex justify-between mt-7 mx-2'>
            <span className='flex items-center font-sans text-3xl text-gray-800 font-bold '>SECTIONS LIST</span>
            <button 
                type='button'
                className='bg-green-500 text-white px-7 py-2 rounded-md font-semibold text-base outline-none hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'
                onClick={handleCustomSection}
            >
                Create New Section
            </button>
        </div>
        {loading ? (
            <Spinner message={"Loading..."}/>
        ) : (
            <div className='mt-7 flex flex-wrap gap-5'>
                <Masonry className='flex animate-slide-fwd' breakpointCols={breakpointObj}>
                    {
                        SECTIONS.map((section) => <Pin website={section} />)
                    }
                </Masonry>
            </div>
        )}
        

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