import React, { useState } from 'react'
import SupaNoteIcon from '../assets/SupaNoteIcon.jpeg'
import RegisterImg from '../assets/undraw_welcoming_42an.svg'
import { Link, useNavigate } from "react-router-dom"
import Spinner from '../utils/Spinner'
import { useAuth } from '../hooks/useAuth'

export default function Register() {

  const { email, setEmail, password, setPassword, username, setUsername, loading, SubmitRegister } = useAuth();

  return (
    <>
      <div className="flex flex-col md:flex flex-row min-h-screen">
        <div className="flex flex-col items-center justify-center gap-7 w-full md: w-1/2">
          <img src={SupaNoteIcon} alt="SupaNote Icon" className="h-20" />
          <h1 className="text-3xl font-bold">Create new account</h1>
          <h3 className="text-center">
            Already a member? <Link to="/login" className='text-[#4169E1] font-bold'>Log in</Link>
          </h3>

          <form onSubmit={SubmitRegister} className="flex flex-col gap-6 items-center">
            <input
              type="text"
              className="form-control w-80 max-w-sm p-3 rounded-lg bg-gray-200 text-black"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />

            <input
              type="text"
              className="form-control w-80 max-w-sm p-3 rounded-lg bg-gray-200 text-black"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Username"
            />

            <input
              type="password"
              className="form-control w-80 max-w-sm p-3 rounded-lg bg-gray-200 text-black"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />

            <button
              type='submit'
              disabled={loading}
              className="bg-black hover:bg-[#4169E1] text-black py-3 px-6 rounded-xl w-60 text-white flex justify-center items-center"
            >
              {loading ? <Spinner /> : "Create account"}
            </button>
          </form>
        </div>



        <div className="hidden md:flex w-full w-1/2 items-center justify-center">
          <img src={RegisterImg} alt="Login Illustration" className="w-3/4" />
        </div>
      </div>


    </>
  )
}
