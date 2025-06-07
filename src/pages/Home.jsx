import React from 'react'
import SupaNoteImg from '../assets/SupaNoteIcon.jpeg'
import Navbar from '../components/HomePage/Navbar'
import SideBar from '../components/HomePage/SideBar'
import NoteArea from '../components/HomePage/NoteArea'


export default function Home() {
  return (
     <div className="min-h-screen flex flex-col">
      {/* Navbar arriba */}
      <Navbar />

      {/* Contenido debajo del Navbar */}
      <div className="flex flex-1">
        {/* Sidebar a la izquierda */}
        <SideBar />

        {/* NoteArea ocupa el resto */}
        <NoteArea />
      </div>
    </div>
  )
}
