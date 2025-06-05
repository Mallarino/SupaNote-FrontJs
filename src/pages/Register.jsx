import React, { useState } from 'react'
import SupaNoteIcon from '../assets/SupaNoteIcon.jpeg'
import LoginImg from '../assets/undraw_welcoming_42an.svg'
import { Link, useNavigate } from "react-router-dom"

export default function Register() {

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="flex min-h-screen">
        <div className="flex flex-col items-center justify-center gap-7 w-1/2">
          <img src={SupaNoteIcon} alt="SupaNote Icon" className="h-20" />
          <h1 className="text-3xl font-bold">Create new account</h1>
          <h3 className="text-center">
            Already a member? <Link to="/login" className='text-[#4169E1] font-bold'>Log in</Link>
          </h3>

          <input
            type="text"
            className="form-control w-full max-w-sm p-3 rounded-lg bg-gray-200 text-black"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
          />

          <input
            type="text"
            className="form-control w-full max-w-sm p-3 rounded-lg bg-gray-200 text-black"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Username"
          />

          <input
            type="password"
            className="form-control w-full max-w-sm p-3 rounded-lg bg-gray-200 text-black"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />

          <button
            type="submit"
            className="bg-black hover:bg-[#4169E1] text-black py-3 px-6 rounded-xl w-60 text-white"
          >
            Create account
          </button>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <img src={LoginImg} alt="Login Illustration" className="w-3/4" />
        </div>
      </div>


    </>
  )
}
