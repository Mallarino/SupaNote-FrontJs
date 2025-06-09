import React, { use, useEffect, useState } from 'react'
import SupaNoteImg from '../../assets/SupaNoteIcon.jpeg'
import { useNavigate } from 'react-router-dom'
import { getUserName, logout } from '../../services/authService'
import ConfirmModal from '../ConfirmModal'
import { toast } from 'react-toastify'
import NavbarMenu from '../../utils/Menus/NavbarMenu'


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
          <NavbarMenu setOpen={setOpen}/>
        </div>
      </div>

      <ConfirmModal 
      open={open} 
      setOpen={setOpen} 
      onClick={handleLogout}
      title={"Logout"}
      message={"Are you sure you want to log out ?"} 
      cancelButton={"Cancel"}
      actionButton={"Logout"}
      />
    </>
  )
}
