import React, { useState } from 'react'
import SupaNoteIcon from '../assets/SupaNoteIcon.jpeg'
import LoginImg from '../assets/undraw_creative-flow_t3kz.svg'
import { Link, useNavigate } from "react-router-dom"
import {  useAuthContext } from '../context/AuthContext'
import { login } from '../services/authService'

export default function Login() {

  const { authenticated, setAuthenticated } = useAuthContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      await login({ email, password });
      alert("Inicio de sesion exitoso");
      setAuthenticated(true);

    } catch (error) {
      alert("Usuario o contraseña incorrectos");
      console.error(error);
    }
    
  }

  return (
    <>
      <div className="flex min-h-screen">
        {/* Lado izquierdo - Formulario */}
        <div className="flex flex-col items-center justify-center gap-8 w-1/2">
          <img src={SupaNoteIcon} alt="SupaNote Icon" className="h-20" />
          <h1 className="text-3xl font-bold">Welcome Back!</h1>
          <h3 className="text-center">
            Simple notes, big results. <b>SupaNote</b>
          </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 items-center">
          <input
            type="text"
            className="form-control w-80 max-w-sm p-3 rounded-lg bg-gray-200 text-black"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your Email"
          />

          <input
            type="password"
            className="form-control w-full max-w-sm p-3 rounded-lg bg-gray-200 text-black"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your Password"
          />

          <b>Not a member? <Link to="/register" className='text-[#4169E1]'>Register now</Link></b>

          <button
            type='submit'
            className="bg-black hover:bg-[#4169E1] text-black py-3 px-6 rounded-xl w-60 text-white"
          >
            Login
          </button>
          </form>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <img src={LoginImg} alt="Login Illustration" className="w-3/4" />
        </div>
      </div>


    </>
  )
}
