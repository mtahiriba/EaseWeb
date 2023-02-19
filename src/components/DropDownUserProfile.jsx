import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const DropDownUserProfile = ({ user }) => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear()
        navigate('/', {replace: true})
      }

  return (
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <Menu.Button className="">
        <img src={user.picture} alt="profile" className='w-10 h-10 rounded-full hidden md:block'/>
      </Menu.Button>
    </div>

    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className='flex flex-col gap-4 my-5 px-5'>
            <div className="py-1 flex justify-center items-center gap-4">
                <Menu.Item>
                    <img src={user.picture} alt="profile" className='w-12 h-12 rounded-full hidden md:block'/>
                </Menu.Item>
                <Menu.Item>
                    <span className='text-sm font-bold'>{user.name}</span>
                </Menu.Item>    
            </div>
            <Menu.Item>
                <button
                    type='button'
                    className='md:block text-neutral-700 font-bold text-sm hover:bg-neutral-700 hover:text-white border h-10 rounded-md border-neutral-700'  
                    // onClick={Register}
                >
                    Switch to Development
                </button>
            </Menu.Item>
        </div>
        
        
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                Dashboard
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
              >
                Move
              </a>
            )}
          </Menu.Item>
        </div>
        <div className="py-1">
          <Menu.Item>
            {({ active }) => (
              <a
                className={classNames(
                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                  'block px-4 py-2 text-sm'
                )}
                onClick={logout}
              >
                Sign out
              </a>
            )}
          </Menu.Item>
          
        </div>
      </Menu.Items>
    </Transition>
  </Menu>
  )
}

export default DropDownUserProfile