import React from 'react'
import { Link } from 'react-router-dom'
import NotFoundImg from '../assets/undraw_page-not-found.svg'

export default function PageNotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className="text-3xl font-bold">Ups... Page not found!</h1>
      <img src={NotFoundImg} className='w-100 h-100' />
      <Link to={"/login"} className="bg-black hover:bg-[#4169E1] text-black py-3 px-6 rounded-xl w-60 text-white flex items-center justify-center">
        Ir a Login
      </Link>
    </div>
  )
}
