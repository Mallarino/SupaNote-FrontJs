import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/Routes'
import { AuthProvider } from './context/AuthContext'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
    <ToastContainer position='top-center' autoClose={3000}/>
  </StrictMode>,
)
