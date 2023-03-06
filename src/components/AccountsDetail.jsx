import React , {useState} from 'react'


const AccountsDetail = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  
  return (
    <div class="flex flex-col h-auto bg-gray-50">
      <div className="flex h-15 p-4  text-gray-500 font-bold border-b-2 boder-gray-600">Profile</div>
      <div className="m-8   overflow-y-auto ">
        
        <div className="flex gap-4 mb-6">
                <div className="w-1/2 mb-6 bg-red-100">
                </div>
                  
                <div className="w-1/2 ml-4 mb-6">
                  <label className="block mb-1 text-sm font-bold text-gray-500 " htmlFor="FullName">FullName</label>
                  <input   className="bg-gray-50 mb-5 text-gray-900 text-sm  block w-full p-2.5  border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500 " type="text" id="FullName" name="FullName"  placeholder="FullName"/>

                  <label className="block mb-1 text-sm font-bold text-gray-500 " htmlFor="email">Email</label>
                  <input  className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5  border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500 " type="email" id="email" name="email"  placeholder="name@easeWeb.com"/>

                </div>
        </div>
        

        <div class="mb-6 ">
            <label htmlFor="displayName" className="block mb-1 text-sm font-bold text-gray-500 ">Public display name</label>
            <input type="text" id="displayName" className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5  border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500  " placeholder="EaseWeb.com.User" required/>
        </div>

        <div class="mb-6 ">
            <label htmlFor="aboutMe" className="block mb-1 text-sm font-bold text-gray-500 ">About Me</label>
           
            <textarea id="aboutMe" name="aboutMe" rows={4} cols={40} className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5  border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500" />
        </div>

        <div className='flex justify-end mb-6'>
              <button type='button' className='bg-green-500 text-white px-10 py-3 rounded-sm text-lg font-medium text-sm outline-none  hover:bg-green-600 hover:border-green-600 border-green-500 border-2 block'>
              Save profile details
              </button>
          </div> 


      </div>

      


     
      
      

      {/* <div className="m-10">
        <form>
          <div className="flex gap-4">
              <div className="w-1/2 mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-500 dark:text-white " htmlFor="fullName">Full Name</label>
                <input  className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500 " type="text" id="fullName" name="fullName" placeholder="FullName"  required />
              </div>
              <div className="w-1/2 mb-6">
                <label className="block mb-2 text-sm font-bold text-gray-500 dark:text-white" htmlFor="lastName">Last Name</label>
                <input  className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500 " type="text" id="lastName" name="lastName"  placeholder="LastName"/>
              </div>
          </div>

          



          <div class="mb-6 ">
            <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-500 dark:text-white">Your email</label>
            <input type="email" id="email" className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500  " placeholder="name@easeWeb.com" required/>
          </div>

          <div class="mb-6 ">
            <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-500 dark:text-white">Your Password</label>
            <input type="password" id="password" className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500  " placeholder="********" required/>
          </div>

          <div class="mb-6">
            <label htmlFor="Address" className="block mb-2 text-sm font-bold text-gray-500 dark:text-white">Address</label>
            <input type="text" id="Address" className="bg-gray-50 text-gray-900 text-sm  block w-full p-2.5 dark:bg-gray-700 border-gray-300 outline-none border-2 p-2 rounded-md hover:border-gray-300  focus:border-green-500  " placeholder=' 123 Main St.' required/>
          </div>

          <div class="mb-6">
            <label htmlFor="Contact" className="block mb-2 text-sm font-bold text-gray-500 dark:text-white">Contact Number</label>
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
        </div>  */}

        

      
      
      
    </div>

  )
}

export default AccountsDetail