import React, { use, useEffect, useState } from 'react'
import SupaNoteImg from '../../assets/SupaNoteIcon.jpeg'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'
import { getUserName, logout } from '../../services/authService'
import ConfimrModal from '../ConfirmModal'
import { toast } from 'react-toastify'


export default function Navbar() {

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [username, setUsername ] = useState("");

  useEffect(() => {
    const username = getUserName();
    setUsername(username)
  }, [])


  const handleLogout = () => {
    logout();
    navigate("/login")
    toast.success("Session closed")
  };

  return (
    <>
      <div id='navbar' className='flex justify-between h-15 mx-5 my-5 '>

        <div className='flex items-center'>
          <img src={SupaNoteImg} alt="" className='w-20' />
          <h1 className='text-3xl font-bold'>My notes</h1>
        </div>

        <input type="text" placeholder='Buscar nota' className='bg-gray-300 w-70 px-5 m-2 rounded-full' />

        <div className='flex m-2 gap-10 justify-center items-center'>
          <h3 className='font-bold'>{username}</h3>
          <Menu as="div" className="relative inline-block ">
            <div>
              <MenuButton className="inline-flex w-full text-sm font-semibold hover:bg-gray-50">
                <Bars3Icon aria-hidden="true" className="-mr-1 size-7 text-black cursor-pointer" />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-20 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <div
                    onClick={() => setOpen(true)}
                    className="block px-4 py-2 cursor-pointer text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                  >
                    Logout
                  </div>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>

        </div>
      </div>

      <ConfimrModal open={open} setOpen={setOpen} onClick={handleLogout} />
    </>
  )
}
