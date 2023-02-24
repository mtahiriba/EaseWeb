import React, {useState} from 'react'
import CustomTemplatesDashboard from './CustomTemplatesDashboard';
import DesignWebsiteDashboard from './DesignWebsiteDashboard';

const activeBtnStyles = 'bg-white py-3 px-10 rounded-t-md shadow-md border-b-2 border-green-500 font-bold';
const notActiveBtnStyles = 'py-3 px-10 rounded-t-md border-green-500 font-bold';

const CustomerDashboardDetails = ({user}) => {

  const [activeButton, setActiveButton] = useState('design')

  return (
    <div>
        <div className='flex pt-5 gap-7 px-20'>
          <div className='flex flex-col gap-5 w-1/2 '>
            <div className='w-full flex flex-col justify-center bg-white border rounded-md px-10 shadow-md h-40'>
                  <span className='font-bold text-3xl font-mono'>HELLO {(user.name).toUpperCase()}!</span>
                  <span className='text-sm font-sans'>It's good to see you again.</span>
            </div>
            <div className='w-full flex flex-col gap-3 h-48'>
                  <div className='h-2/5 flex justify-between items-center rounded-md bg-white border px-7 shadow-md'>
                      <div className='flex gap-5 flex-row w-10/12'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 ">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                        </svg>

                        <span className='font-bold mr-5 font-sans' >Current Website Progress</span>
                        <div className='w-48 my-auto'>
                          <div className=" bg-gray-200 rounded-full dark:bg-gray-700 w-full">
                            <div className="bg-green-500 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full" style={{"width": "45%"}}> 45%</div>
                          </div>
                        </div>      


                      </div>
                      <button 
                        type='button'
                        className='bg-green-500 text-white px-7 py-1 rounded-md font-semibold text-base outline-none hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'
                      >
                        Continue
                      </button>
                      
                  </div>
                  <div className='h-3/5 flex justify-between items-center gap-3'>
                      <div className='rounded-md bg-white border w-1/2 h-full flex justify-start items-center gap-3 px-12 shadow-md'>
                        <span className='text-6xl font-bold'>11</span>
                        <span className='font-sans'>Custom designed templates</span>
                      </div>
                      <div className=' rounded-md bg-white border w-1/2 h-full flex justify-start items-center gap-3 px-12 shadow-md'>
                        <span className='text-6xl font-bold'>4</span>
                        <span className='font-sans '>Designed <br /> websites</span>
                      </div>
                  </div>
            </div>
          </div>
          <div className='w-1/2'>
            <div className='flex'>
              <button
                type='button'
                onClick={(e) => {
                  setActiveButton('design')
                }}
                className={`${activeButton === 'design' ? activeBtnStyles : notActiveBtnStyles}`}
              >
                Designed websites
              </button>
              <button
                type='button'
                onClick={(e) => {
                  setActiveButton('custom')
                }}
                className={`${activeButton === 'custom' ? activeBtnStyles : notActiveBtnStyles}`}
              >
                Custom sections
              </button>  
            </div>
            <div className=' w-full flex h-96 '>
                {activeButton === 'design' ? <DesignWebsiteDashboard /> : <CustomTemplatesDashboard />}
            </div>
          </div>
      </div>
    </div>
    
  )
}

export default CustomerDashboardDetails