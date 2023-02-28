import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import DropDownUserProfile from './DropDownUserProfile'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

function DashboardNavbar({setUser, setOption}) {

  const user = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear()


  return (
    <nav className="bg-white md:px-20 px-5 py-3 border-2">
        <div className="flex flex-wrap items-center justify-between">
            <Link
              to="/"
              onClick={() => setOption('dashboard')}
            >
              <img src={logo} width="130px" alt='logo' className=''/>
            </Link>
            
            <div className='flex flex-row justify-center items-center gap-10'>
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button type="button" className="relative inline-flex items-center p-1  text-center text-black ">
                  <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  className='h-7 w-7'>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
                  </svg>
                  <div className="absolute inline-flex items-center justify-center w-2 h-2 text-xs font-bold text-white bg-red-500 border-white rounded-full top-px right-px dark:border-gray-900"></div>
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-96  h-96 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                        <div className="py-3 px-3 flex justify-start items-center gap-2 text-gray-600">
                  
                              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  className='h-5 w-5'>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
                              </svg>

                              <span className='text-sm font-bold'>{`Notifications (${1})`}</span>
                        </div>    
                        <div className='overflow-auto flex flex-col h-4/5'>
                          <Menu.Item>
                            <div className='flex flex-row gap-4 px-5 py-5 border-b hover:bg-gray-100'>
                                <div className='bg-gray-200 flex justify-center items-center w-14 rounded-full text-gray-600'>
                                  <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  className='h-5 w-5'>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
                                  </svg>
                                </div>
                                <span className='text-sm font-bold text-gray-600'>Congratulations your website was published sucessfully</span>
                            </div>
                          </Menu.Item>
                          <Menu.Item>
                            <div className='flex flex-row gap-4 px-5 py-5 border-b hover:bg-gray-100'>
                                <div className='bg-gray-200 flex justify-center items-center w-14 rounded-full text-gray-600'>
                                  <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  className='h-5 w-5'>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
                                  </svg>
                                </div>
                                <span className='text-sm font-bold text-gray-600'>Congratulations your website was published sucessfully</span>
                            </div>
                          </Menu.Item>
                          <Menu.Item>
                            <div className='flex flex-row gap-4 px-5 py-5 border-b hover:bg-gray-100'>
                                <div className='bg-gray-200 flex justify-center items-center w-14 rounded-full text-gray-600'>
                                  <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  className='h-5 w-5'>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
                                  </svg>
                                </div>
                                <span className='text-sm font-bold text-gray-600'>Congratulations your website was published sucessfully</span>
                            </div>
                          </Menu.Item>
                          <Menu.Item>
                            <div className='flex flex-row gap-4 px-5 py-5 border-b hover:bg-gray-100'>
                                <div className='bg-gray-200 flex justify-center items-center w-14 rounded-full text-gray-600'>
                                  <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  className='h-5 w-5'>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
                                  </svg>
                                </div>
                                <span className='text-sm font-bold text-gray-600'>Congratulations your website was published sucessfully</span>
                            </div>
                          </Menu.Item>
                          <Menu.Item>
                            <div className='flex flex-row gap-4 px-5 py-5 border-b hover:bg-gray-100'>
                                <div className='bg-gray-200 flex justify-center items-center w-14 rounded-full text-gray-600'>
                                  <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  className='h-5 w-5'>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
                                  </svg>
                                </div>
                                <span className='text-sm font-bold text-gray-600'>Congratulations your website was published sucessfully</span>
                            </div>
                          </Menu.Item>
                          <Menu.Item>
                            <div className='flex flex-row gap-4 px-5 py-5 border-b hover:bg-gray-100'>
                                <div className='bg-gray-200 flex justify-center items-center w-14 rounded-full text-gray-600'>
                                  <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"  className='h-5 w-5'>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"></path>
                                  </svg>
                                </div>
                                <span className='text-sm font-bold text-gray-600'>Congratulations your website was published sucessfully</span>
                            </div>
                          </Menu.Item>
                          
                        </div>
                        <div className=' py-1 px-3'>
                          <Menu.Item>
                            <Link
                              to="/notifications"
                              onClick={() => setOption('profile')}
                            >
                              <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className='w-5 h-5 text-gray-600'>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"></path>
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                              </svg>
                            </Link>
                          </Menu.Item>
                        </div>
                        
                  </Menu.Items>
                </Transition>

              </Menu>
                <DropDownUserProfile user={user} setUser={setUser} setOption={setOption}/>
              </div>
        </div>
    </nav>
  )
}

export default DashboardNavbar