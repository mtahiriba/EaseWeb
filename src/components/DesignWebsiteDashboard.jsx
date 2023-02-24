import React, { useState } from 'react'
import Pin from './pin'
import { WEBSITES } from '../shared/Websites'

const DesignWebsiteDashboard = () => {

    const [websitetoggle, setWebsitetoggle] = useState(false)
    const [btnText, setBtnText] = useState('Next')
    const [category, setCategory] = useState('')
    const [webName, setWebName] = useState('')
    const [discription, setDiscription] = useState('')

    const handleCreateNewWebsite = () => {
        setWebsitetoggle(true)
    }

    const handleFormButton = () => {
        if(category){

            const web = {
                _id: WEBSITES.length + 1,
                name: webName,
                picUrl: 'https://picsum.photos/1000/500',
                category: category,
                discription: discription,
            }
            WEBSITES.push(web)
            
            setWebsitetoggle(false)
            setBtnText("Next")
            setCategory('')
            setWebName('')
            setDiscription('')
        }
        else{
            setCategory("tahir")
            setBtnText("Create Website")
        }
    }

    const handleBackButton = () => {
        setBtnText("Next")
        setCategory('')
    }

    
  return (
    <div className='w-full'>
        <div className='flex justify-between mt-7'>
            <span className='flex items-center font-sans text-3xl text-gray-800 font-bold '>WEBSITE LIST</span>
            <button 
                type='button'
                className='bg-green-500 text-white px-7 py-2 mr-2 rounded-md font-semibold text-base outline-none hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'
                onClick={handleCreateNewWebsite}
            >
                Create New Website
            </button>
        </div>

        <div className='mt-7 flex flex-wrap gap-5'>
            {WEBSITES.map((website) => <Pin website={website} />)}
        </div>

        {websitetoggle && (
            <div className='absolute flex flex-col justify-center items-center top-0 left-0 right-0 buttom-0 bg-blackOverlay h-full gap-3'>
                <div className='flex-col md:w-2/6 w-5/6 h-4/5 flex items-center justify-between rounded-lg  bg-white'>
                    <div className='w-full h-full flex flex-col items-center rounded-t-md'>
                        <div className='w-full h-14 bg-green-500 rounded-t-md px-7 flex items-center text-white'>
                            {category && (
                                <button
                                    type='button'
                                    onClick={handleBackButton}
                                >
                                    <svg fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-6 h-6 hover:w-8 hover:h-8'>
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                                    </svg>
                                </button>
                                
                            )}
                        </div>
                        <div className='flex w-full justify-center pt-1 gap-7'>
                            <hr className={`w-20 border-4 mt-5 rounded-lg border-green-500`}/>
                            <hr className={`w-20 border-4 mt-5 rounded-lg ${category ? "border-green-500" : "border-gray-300"}`}/>
                        </div>
                        {!category && (
                            <div className='flex flex-col px-7 items-center w-full h-full pt-7'>
                                <span className='text-2xl font-bold'> SELECT TYPE OF WEBSITE</span>
                                <div className='flex flex-col gap-3 py-5'>
                                    <div className='flex gap-3'>
                                        <button 
                                            type='button'
                                            className='w-36 border-2 bg-white h-24 rounded-sm flex flex-col justify-center items-center shadow hover:bg-green-600 text-gray-500 hover:text-white hover:border-green-600 focus:text-white focus:border-green-700 focus:bg-green-600'
                                        >
                                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-8 h-8 '>
                                                <path   stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path>
                                            </svg>
                                            <span className='text-sm  font-bold'>Photography</span>
                                        </button>
                                        <div className='w-36 border-2 bg-white h-24 rounded-sm flex flex-col justify-center items-center shadow hover:bg-green-600 text-gray-500 hover:text-white hover:border-green-600'>
                                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-8 h-8 '>
                                                <path   stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path>
                                            </svg>
                                            <span className='text-sm  font-bold'>Blog</span>
                                        </div>
                                        <div className='w-36 border-2 bg-white h-24 rounded-sm flex flex-col justify-center items-center shadow hover:bg-green-600 text-gray-500 hover:text-white hover:border-green-600'>
                                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-8 h-8 '>
                                                <path   stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path>
                                            </svg>
                                            <span className='text-sm  font-bold'>Online Store</span>
                                        </div>
                                    </div>
                                    <div className=' flex gap-3'>
                                        <div className='w-36 border-2 bg-white h-24 rounded-sm flex flex-col justify-center items-center shadow hover:bg-green-600 text-gray-500 hover:text-white hover:border-green-600'>
                                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-8 h-8 '>
                                                <path   stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path>
                                            </svg>
                                            <span className='text-sm  font-bold'>Bussiness</span>
                                        </div>
                                        <div className='w-36 border-2 bg-white h-24 rounded-sm flex flex-col justify-center items-center shadow hover:bg-green-600 text-gray-500 hover:text-white hover:border-green-600'>
                                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-8 h-8 '>
                                                <path   stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path>
                                            </svg>
                                            <span className='text-sm  font-bold  flex justify-center items-center'>Transportation</span>
                                        </div>
                                        <div className='w-36 border-2 bg-white h-24 rounded-sm flex flex-col justify-center items-center shadow hover:bg-green-600 text-gray-500 hover:text-white hover:border-green-600'>
                                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-8 h-8 '>
                                                <path   stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path>
                                            </svg>
                                            <span className='text-sm  font-bold'>Photography</span>
                                        </div>
                                    </div>
                                    <div className='flex gap-3'>
                                        <div className='w-36 border-2 bg-white h-24 rounded-sm flex flex-col justify-center items-center shadow hover:bg-green-600 text-gray-500 hover:text-white hover:border-green-600'>
                                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-8 h-8 '>
                                                <path   stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path>
                                            </svg>
                                            <span className='text-sm  font-bold'>Photography</span>
                                        </div>
                                        <div className='w-36 border-2 bg-white h-24 rounded-sm flex flex-col justify-center items-center shadow hover:bg-green-600 text-gray-500 hover:text-white hover:border-green-600'>
                                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-8 h-8 '>
                                                <path   stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path>
                                            </svg>
                                            <span className='text-sm  font-bold'>Photography</span>
                                        </div>
                                        <div className='w-36 border-2 bg-white h-24 rounded-sm flex flex-col justify-center items-center shadow hover:bg-green-600 text-gray-500 hover:text-white hover:border-green-600'>
                                            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-8 h-8 '>
                                                <path   stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"></path>
                                            </svg>
                                            <span className='text-sm  font-bold'>Photography</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {category && (
                            <div className='flex flex-col px-7  w-full h-full pt-7 items-center gap-5'>
                                <span className='text-2xl font-bold pb-2'>WEBSITE DETAILS</span>
                                <input
                                    className='border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-500 w-full focus:border-blue-400 focus:shadow focus:shadow-blue-500'
                                    type='text'
                                    placeholder='Website Name'
                                    value={webName}
                                    onChange={(e)=>setWebName(e.target.value)}
                                />
                                <textarea class="resize-none border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-500 w-full h-32 focus:border-blue-400 focus:shadow focus:shadow-blue-500    "
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