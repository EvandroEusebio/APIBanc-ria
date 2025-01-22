import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import SignIn from './pages/SignIn/index.tsx'
import SignUp from './pages/SignUp/index.tsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <SignIn/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
