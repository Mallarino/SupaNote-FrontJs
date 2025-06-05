import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div>
        <h1>Pagina no encontrada ❌</h1>
        <Link to={"/login"}>
            <button>Ir a Login</button>
        </Link>
    </div>
  )
}
