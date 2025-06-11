import React, { useState } from 'react'
import SupaNoteIcon from '../assets/SupaNoteIcon.jpeg'
import LoginImg from '../assets/undraw_creative-flow_t3kz.svg'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../hooks/useAuth'

export default function Login() {

  const { email, setEmail, password, setPassword, loading, SubmitLogin } = useAuth();

  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Lado izquierdo - Formulario */}
        <div className="flex flex-col items-center justify-center gap-8 w-full md: w-1/2 p-6">
          <img src={SupaNoteIcon} alt="SupaNote Icon" className="h-16 md:h-20" />
          <h1 className="text-2xl md:text-3xl font-bold text-center">Welcome Back!</h1>
          <h3 className="text-center text-gray-700">
            Simple notes, big results. <b>SupaNote</b>
          </h3>

          <form onSubmit={SubmitLogin} className="flex flex-col gap-6 items-center w-80 max-w-sm">
            <input
              type="text"
              className="form-control w-full p-3 rounded-lg bg-gray-200 text-black"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your Email"
            />

            <input
              type="password"
              className="form-control w-full p-3 rounded-lg bg-gray-200 text-black"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your Password"
            />

            <b className="text-center text-sm">
              Not a member? <Link to="/register" className="text-[#4169E1]">Register now</Link>
            </b>

            <button
              type="submit"
              disabled={loading}
              className="bg-black hover:bg-[#4169E1] text-white py-3 px-6 rounded-xl w-60"
            >
              {loading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto" />
              ) : "Login"}
            </button>
          </form>
        </div>

        {/* Imagen derecha */}
        <div className="hidden md:flex w-full w-1/2 items-center justify-center">
          <img src={LoginImg} alt="Login Illustration" className="w-3/4" />
        </div>
      </div>


    </>
  )
}
