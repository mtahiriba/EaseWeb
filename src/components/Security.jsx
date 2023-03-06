import React from 'react'

const Security = () => {
  return (
    <div class="flex flex-col bg-gray-50 h-auto  ">
      <div className="m-10  border-b-2 boder-gray-600">
      <form>
          <div className="mb-6 text-sm font-lg font-medium text-gray-500 ">
            SET PASSWORD
          </div>
          <div className="flex ">
              <div className="w-1/4 mt-3">
                <label className="block mb-2 text-sm font-bold text-gray-500 " htmlFor="password">New Password</label>
              </div>
              <div className="w-3/4 mb-6">
                <input  className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500 " type="password" id="password" name="password"  />
              </div>
          </div>
          <div className="flex ">
              <div className="w-1/4 mt-3">
                <label className="block mb-2 text-sm font-bold text-gray-500 " htmlFor="password">Confirm Password</label>
              </div>
              <div className="w-3/4 mb-6 ">
                <input  className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5  border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500 " type="password" id="confirmPassword" name="password"  />
              </div>
          </div>
          <div className="flex justify-end mr-10 mb-6 text-sm font-lg font-medium text-gray-400 ">
            <p>8 characters or longer.Combine upper and lowercase letters and numbers</p>
          </div>
          <div className='flex justify-end mb-6'>
              <button type='button' className='bg-green-500 text-white px-10 py-3 rounded-sm text-lg font-medium text-sm outline-none  hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'>
              Save Changes
              </button>
          </div>    
        </form>
    </div>   
  </div>   


     
  )
}

export default Security