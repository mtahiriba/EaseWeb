import React from 'react'

const Security = () => {
  return (
    <div class="flex flex-col h-40 bg-gray-50 md:h-screen ">
      <div className="m-10  border-b-2 boder-gray-600">
        <form>
          <div className="mb-6 text-sm font-lg font-medium text-gray-500 dark:text-white">
            SET PASSWORD
          </div>
          <div className="flex ">
              <div className="w-1/4 mt-3">
                <label className="block mb-2 text-sm font-bold text-gray-500 dark:text-white" htmlFor="password">New Password</label>
              </div>
              <div className="w-3/4 mb-6">
                <input  className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500 " type="password" id="password" name="password"  />
              </div>
          </div>
          <div className="flex ">
              <div className="w-1/4 mt-3">
                <label className="block mb-2 text-sm font-bold text-gray-500 dark:text-white" htmlFor="password">Confirm Password</label>
              </div>
              <div className="w-3/4 mb-6 ">
                <input  className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500 " type="password" id="confirmPassword" name="password"  />
              </div>
          </div>
          <div className="flex justify-end mr-10 mb-6 text-sm font-lg font-medium text-gray-500 dark:text-white">
            <p>8 characters or longer.Combine upper and lowercase letters and numbers</p>
          </div>
          <div className='flex justify-end mb-6'>
              <button type='button' className='bg-green-500 text-white px-4 py-1 rounded-sm text-lg font-medium text-sm outline-none  hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'>
              Save Changes
              </button>
          </div>    
        </form>
    </div>   


    {/*Phone verification */} 
    <div className="m-10  boder-gray-600">
        
          
          <div className="flex ">
              <div className="w-1/4">
                <label className="block mb-2 text-sm font-bold text-gray-500 dark:text-white">Two Factor Authentication</label>
              </div>

              <div className="w-3/4">
                  <label class="relative inline-flex items-center mb-5 cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
                    
                  </label>
              </div>
              
          </div>


          <div className="flex">
            <div className="w-1/4"></div>
            <div className="w-3/4 flex mb-6 text-sm font-lg font-medium text-gray-500 dark:text-white">
            <p>To help keep your account secure, we'll ask you to submit a code when using a new device to log in. We'll send the code via SMS, email, or  notification.</p>
          </div>
          </div>
          

              


          
          
        
    </div>   


    {/*ending*/ }
    </div>   
  )
}

export default Security