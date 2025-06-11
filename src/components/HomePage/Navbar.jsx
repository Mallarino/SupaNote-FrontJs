import React, { use, useEffect, useState } from 'react'
import SupaNoteImg from '../../assets/SupaNoteIcon.jpeg'
import { useNavigate } from 'react-router-dom'
import { getUserName, logout } from '../../services/authService'
import { useNotesContext } from '../../context/NoteContext';
import ConfirmModal from '../ConfirmModal'
import { toast } from 'react-toastify'
import NavbarMenu from '../../utils/Menus/NavbarMenu'


export default function Navbar() {

  const navigate = useNavigate();

  const { query, setQuery } = useNotesContext();

  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");

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
      <div className='flex justify-between h-15 my-5'>

        <div className='flex items-center'>
          <img src={SupaNoteImg} alt="" className='w-20' />
          <h1 className='hidden md:block text-3xl font-bold'>My notes</h1>
        </div>

        <input type="text" placeholder='Buscar nota' value={query} onChange={(e) => setQuery(e.target.value)} className='bg-gray-300 w-70 px-5 m-2 rounded-full' />

        <div className='flex m-2 gap-10 justify-center items-center'>
          <h3 className='hidden md:font-bold'>{username}</h3>
          <NavbarMenu setOpen={setOpen} />
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
