import React from 'react'

const style = { "--value": 70 };

const CustomerDashboardDetails = ({user}) => {
  return (
    <div className='flex justify-center pt-5'>
        <div className='flex flex-row gap-7 w-full px-20 justify-between h-40'>
          <div className='w-1/2 flex flex-col justify-center bg-white border rounded-md px-10 shadow-md'>
                <span className='font-bold text-xl'>HELLO {(user.name).toUpperCase()}!</span>
                <span className='text-sm'>It's good to see you again.</span>
          </div>
          <div className='w-1/2 flex flex-col gap-3'>
                <div className='h-2/5 flex justify-between items-center rounded-md bg-white border px-7 shadow-md'>
                    <div className='flex gap-5 flex-row w-10/12'>
                      <img width={30} 
                        src="https://lh3.googleusercontent.com/a/AGNmyxYgZfy0Jvqpm-LsVnAeV-XbRtEnEcuM-6kgW1-1Rg=s96-c" 
                        alt="" 
                        className='rounded-md'
                      />
                      <span className='font-bold mr-5' >Current Website Progress</span>
                      <div className='w-48 my-auto'>
                        <div className=" bg-gray-200 rounded-full dark:bg-gray-700 w-full">
                          <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{"width": "45%"}}> 45%</div>
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
                      <span className='text-xl font-bold'>11</span>
                      <span>Custom designed templates</span>
                    </div>
                    <div className=' rounded-md bg-white border w-1/2 h-full flex justify-start items-center gap-3 px-12 shadow-md'>
                      <span className='text-xl font-bold'>4</span>
                      <span>Designed websites</span>
                    </div>
                </div>
                
          </div>
        </div>
    </div>
  )
}

export default CustomerDashboardDetails