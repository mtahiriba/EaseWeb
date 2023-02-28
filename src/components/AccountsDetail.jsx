import React , {useState} from 'react'


const AccountsDetail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  
  return (
    <div class="flex flex-col  h-90 bg-gray-50 md:h-screen">
      

      <div className="m-10">
        <form>
          <div className="flex gap-4">
              <div className="w-1/2 mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-500 dark:text-white " for="fullName">Full Name</label>
                <input  className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500 " type="text" id="fullName" name="fullName" placeholder="FullName"  required />
              </div>
              <div className="w-1/2 mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-500 dark:text-white" for="lastName">Last Name</label>
                <input  className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500 " type="text" id="lastName" name="lastName"  placeholder="LastName"/>
              </div>
          </div>

          



          <div class="mb-6 ">
            <label for="email" className="block mb-2 text-sm font-bold text-gray-500 dark:text-white">Your email</label>
            <input type="email" id="email" className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500  " placeholder="name@easeWeb.com" required/>
          </div>

          <div class="mb-6 ">
            <label for="password" className="block mb-2 text-sm font-bold text-gray-500 dark:text-white">Your Password</label>
            <input type="password" id="password" className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500  " placeholder="********" required/>
          </div>

          <div class="mb-6">
            <label for="Address" className="block mb-2 text-sm font-bold text-gray-500 dark:text-white">Address</label>
            <input type="text" id="Address" className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500  " placeholder=' 123 Main St.' required/>
          </div>

          <div class="mb-6">
            <label for="Contact" className="block mb-2 text-sm font-bold text-gray-500 dark:text-white">Contact Number</label>
            <input type="text" id="contact" className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500  " placeholder="5555-555-5555" required/>
          </div>


          <div className='flex justify-end gap-4 mt-10'>
              <button type='button' className='bg-green-500 text-white px-6 py-2 rounded-md text-lg font-medium text-base outline-none  hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'>
              Cancel
              </button>

              <button type='button' className='bg-green-500 text-white px-6 py-2 rounded-md text-lg font-medium text-base outline-none  hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'>
              Save
              </button>

             

                
              </div>
        

        </form>
        </div> 

        

      
      
      
    </div>

  )
}

export default AccountsDetail