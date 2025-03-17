import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SignInPage from './auth/sign-in/index.jsx'
import Home from './home/index.jsx'
import Dashboard from './dashboard'
import {ClerkProvider} from '@clerk/clerk-react'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

//using react router v6 to implement clientside routing 

//createBrowserRouter defines routing structure for app
const router=createBrowserRouter([
  {
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/dashboard',
        element:<Dashboard/>
      }
    ]
  },
  { 
    path:'/auth/sign-in/',
    element:<SignInPage/>
  }
])



//initializes react app inside index.html under <div id="root">
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
