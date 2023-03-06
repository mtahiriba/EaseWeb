import React, {useState} from 'react'
import CustomTemplatesDashboard from './CustomTemplatesDashboard';
import DesignWebsiteDashboard from './DesignWebsiteDashboard';
import { Link } from 'react-router-dom';
import {WEBSITES} from '../shared/Websites'
import {SECTIONS} from '../shared/Sections'

const activeBtnStyles = 'bg-white py-3 px-10 rounded-t-md shadow-md border-b-2 border-green-500 font-bold text-base';
const notActiveBtnStyles = 'py-3 px-10 rounded-t-md border-green-500 font-bold text-base';

const CustomerDashboardDetails = ({user, setOption}) => {

  const [websiteNum, setWebsiteNum] = useState(WEBSITES.length)
  const [sectionNum, setSectionNum] = useState(SECTIONS.length)
  const [activeButton, setActiveButton] = useState('design')
  const [userPinNum, setUserPinNum] = useState(0)

  return (
    <div>
        <div className='flex pt-5 gap-10 md:px-20 px-4 md:flex-row flex-col'>
          <div className='flex flex-col gap-5 md:w-2/5 w-full'>
            <div className='relative w-full flex flex-col justify-center bg-white rounded-md  shadow-md md:h-40 h-28'>
                  <span className='font-bold md:text-3xl text-xl font-mono px-10'>HELLO {(user.name).toUpperCase()}!</span>
                  <span className='md:text-sm text-xs font-sans px-10'>It's good to see you again.</span>
                  <Link 
                    to='/'
                    className='absolute w-full h-full rounded-md hover:bg-grayOverlay'
                    onClick={() => setOption('profile')}
                  ></Link>
            </div>
            <div className='w-full flex flex-col gap-3 h-48'>
                  {userPinNum ? (
                      <div className='h-2/5 flex justify-between items-center rounded-md bg-white border md:px-7 px-3 shadow-md gap-2'>
                        <div className='flex gap-3 flex-row items-center justify-between w-10/12'>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                          </svg>
                          <span className='md:text-sm text-xs md:mr-5 font-sans' >Current Website Progress</span>
                          <div className='md:w-32 w-24'>
                            <div className=" bg-gray-200 rounded-full dark:bg-gray-700 w-full">
                              <div className="bg-green-500 text-xs font-medium text-white text-center  leading-none rounded-full" style={{"width": "45%"}}> 45%</div>
                            </div>
                          </div>      
                        </div>
                        <button 
                          type='button'
                          className='bg-green-500 text-white md:px-3 px-2 py-1 rounded-md font-semibold text-xs outline-none hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'
                        >
                          Continue
                        </button>
                    </div>
                  ):(
                    <></>
                  )}
                  <div className='md:h-3/5 h-2/5 flex justify-between items-center gap-3'>
                      <div className='relative rounded-md bg-white  w-1/2 h-full flex md:justify-start justify-center items-center gap-3 shadow-md'>
                        <span className='md:text-6xl text-5xl font-bold md:pl-12'>{sectionNum}</span>
                        <span className='font-sans md:text-sm text-xs'>Custom <br/> designed <br/> templates</span>
                        <button 
                          type='button'
                          className='absolute w-full h-full rounded-md hover:bg-grayOverlay'
                          onClick={(e) => {
                            setActiveButton('custom')
                          }} 
                        ></button>
                      </div>
                      <div className='relative rounded-md bg-white w-1/2 h-full flex md:justify-start justify-center items-center gap-3 shadow-md'>
                        <span className='md:text-6xl text-5xl font-bold md:pl-12'>{websiteNum}</span>
                        <span className='font-sans md:text-sm text-xs'>Designed <br /> websites</span>
                        <button 
                          type='button'
                          className='absolute w-full h-full rounded-md hover:bg-grayOverlay'
                          onClick={(e) => {
                            setActiveButton('design')
                          }} 
                        ></button>
                      </div>
                  </div>
            </div>
          </div>
          <div className='md:w-3/5 w-full'>
            <div className='flex mx-2'>
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
                {activeButton === 'design' ? <DesignWebsiteDashboard setWebsiteNum={setWebsiteNum} user={user} setUserPinNum={setUserPinNum}/> : <CustomTemplatesDashboard setSectionNum={setSectionNum}/>}
            </div>
          </div>
      </div>
    </div>
    
  )
}

export default CustomerDashboardDetails