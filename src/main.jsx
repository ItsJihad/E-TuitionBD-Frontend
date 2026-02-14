import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { RouterProvider } from 'react-router'
import { GeneralRouter } from '../src/routes/General Routes/Routes'
import Authprovider from './firebase/contexts/Authprovider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider>
      <RouterProvider router={GeneralRouter}/>
      </Authprovider> 
  </StrictMode>,
)
