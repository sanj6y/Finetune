import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Navigate, Outlet } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

function App() {
  const [count, setCount] = useState(0)
  const {user,isLoaded, isSignedIn}=useUser();

  //forces navigation to sign in page if not signed in
  if(!isSignedIn&&isLoaded) {
    return <Navigate to={'/auth/sign-in'} />
  }
  return (
    <>
      <Outlet/>
    </>
  )
}

export default App