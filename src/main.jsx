import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/Routes'
import { NotesProvider } from './context/NoteContext'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotesProvider>
      <AppRoutes />
    </NotesProvider>
    <ToastContainer position='top-center' autoClose={2000}/>
  </StrictMode>,
)
