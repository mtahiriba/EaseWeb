import React, { useState, useEffect } from 'react'
import Pin from './pin'
import { WEBSITES } from '../shared/Websites'
import Masonry from 'react-masonry-css'
import classNames from 'classnames';
import Spinner from './Spinner'

const breakpointObj = {
    default: 4,
    3000: 5,
    2000: 4,
    1200: 3,
    1000: 2,
    500: 1
  
  }

const DesignWebsiteDashboard = ({setWebsiteNum, user, setUserPinNum}) => {

    const [websitetoggle, setWebsitetoggle] = useState(false)
    const [btnText, setBtnText] = useState('Next')
    const [category, setCategory] = useState(null)
    const [webName, setWebName] = useState('')
    const [discription, setDiscription] = useState('')
    const [pins, setPins] = useState(null) 
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setPins(WEBSITES.filter((web) => web.user_id === user._id))
    }, [WEBSITES.length])

    useEffect(() => {
        setWebsiteNum(pins?.length)
        setUserPinNum(pins?.length)
    }, [pins])

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])



    const handleCreateNewWebsite = () => {
        setWebsitetoggle(true)
    }

    const handleFormButton = () => {
        if(webName && discription && category){

            const web = {
                _id: WEBSITES.length + 1,
                name: webName,
                picUrl: 'https://picsum.photos/1000/500',
                category: category,
                discription: discription,
                user_id: user._id,
            }
        
            WEBSITES.push(web)
            
            setBtnText("Next")
            setWebName('')
            setDiscription('')
            setCategory(null)
            setWebsitetoggle(false)
            
        }
        else if(category){
            setBtnText("Create Website")
        }
    }

    const handleBackButton = () => {
        setBtnText("Next")
    }

    const handleButtonClick = (buttonId) => {
        setCategory(buttonId);
      };

  return (
    <div className='w-full'>
        <div className='flex justify-between mt-7 mx-2'>
            <span className='flex items-center font-sans md:text-3xl text-gray-800 font-bold '>WEBSITE LIST</span>
            <button 
                type='button'
                className='bg-green-500 text-white md:px-7 px-3 py-2 rounded-md font-semibold md:text-base text-xs outline-none hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'
                onClick={handleCreateNewWebsite}
            >
                Create New Website
            </button>
        </div>
        {loading ? (
            <Spinner message={"Loading..."}/>
        ):(
            <div className='mt-5 overflow-auto h-96'>
                <Masonry className='flex animate-slide-fwd' breakpointCols={breakpointObj}>
                    {pins?.map((pin) => <Pin website={pin} />)}
                    {/* <div className='flex justify-center items-center h-full'>
                        <div className="relative bg-white rounded-sm shadow-md m-2 mt-4 h-5/6 w-full flex justify-center items-center">
                            <div className='flex justify-center items-center flex-col border-2 border-dotted border-gray-300  w-5/6 h-5/6'>
                                <div className='p-3 border-2 border-dotted border-gray-300 rounded-full'>
                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-10 h-10'>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                            </div>
                            <button 
                                type='button'
                                className='absolute w-full h-full  hover:bg-grayOverlay'
                                //   onClick={(e) => {
                                //     setActiveButton('custom')
                                //   }} 
                            ></button>
                        </div>
                        
                    </div> */}
                    
                </Masonry>
            </div>
        )}

        

        {websitetoggle && (
            <div className='absolute flex flex-col justify-center items-center top-0 left-0 right-0 buttom-0 bg-blackOverlay h-full gap-3'>
                <div className='flex-col md:w-2/6 w-5/6 md:h-4/5 flex items-center justify-between rounded-lg  bg-white'>
                    <div className='w-full h-full flex flex-col items-center rounded-t-md'>
                        <div className='w-full h-14 bg-green-500 rounded-t-md px-7 flex items-center text-white'>
                            {btnText === "Create Website" && (
                                <button
                                    type='button'
                                    onClick={handleBackButton}
                                >
                                    <svg fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-6 h-6 hover:text-gray-700'>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                                    </svg>
                                </button>
                            )}
                        </div>
                        <div className='flex w-full justify-center pt-1 gap-7'>
                            <hr className={`w-20 border-4 mt-5 rounded-lg border-green-500`}/>
                            <hr className={`w-20 border-4 mt-5 rounded-lg ${btnText === "Create Website" ? "border-green-500" : "border-gray-300"}`}/>
                        </div>
                        {btnText !== "Create Website" && (
                            <div className="flex justify-center flex-wrap gap-3 mt-12">
                                {['Photography', 'Blog', 'Online Store', 'Bussiness', 'Transportation', 'Transportation1', 'Transportation2', 'Transportation3', 'Transportation4'].map((item, idx) => (
                                    <button
                                    key={idx}
                                    className={classNames(
                                        ' w-36 border-2 h-24 rounded-sm flex flex-col justify-center items-center shadow hover:bg-green-500 text-gray-500 hover:text-white hover:border-green-600 ',
                                        {
                                        'bg-green-600 text-white': category === item,
                                        }
                                    )}
                                    onClick={() => handleButtonClick(item)}
                                    >
                                    <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-8 h-8 '>
                                                <path   stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path>
                                    </svg>
                                    {item}
                                    </button>
                                ))}
                            </div>
                        )}

                        {btnText === "Create Website" && (
                            <div className='flex flex-col px-7  w-full h-full pt-7 items-center gap-5'>
                                <span className='text-2xl font-bold pb-2'>WEBSITE DETAILS</span>
                                <input
                                    className='border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-500 w-full focus:border-green-500 '
                                    type='text'
                                    placeholder='Website Name'
                                    value={webName}
                                    onChange={(e)=>setWebName(e.target.value)}
                                />
                                <textarea class="resize-none border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-500 w-full h-32 focus:border-green-500 "
                                    placeholder='Website Discription'
                                    value={discription}
                                    onChange={(e)=>setDiscription(e.target.value)}
                                >
                                </textarea>
                            </div>
                        )}

                    </div>
                    <div className='py-3 border-t w-full px-7 flex justify-end items-center'>
                        <button
                            type='button'
                            className='bg-green-500 text-white px-10 py-2 rounded-md font-semibold text-base outline-none hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'
                            onClick={handleFormButton}
                        >
                            {btnText}
                        </button>
                    </div>
                </div>
            </div>
        )}
        
    </div>
  )
}

export default DesignWebsiteDashboard