import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { createContext, useState } from 'react'
import SoloRoom from './pages/SoloRoom'
import GroupRoom from './pages/GroupRoom'
import type { User } from './types/user'

interface UserContextType{
  user:User,
  userHandler:(user:User)=>void
}

export const UserContext = createContext<UserContextType>({
  user:{username:"",img:""},
  userHandler:()=>{}
})

function App() {
  const [user, setUser] = useState<User>({
    username:"",
    img:""
  })

  const userHandler=(newUser:User)=>{
    setUser(newUser)
  }
  const value ={user, userHandler}

  return (
    <UserContext value={value}>
      <BrowserRouter>
      {/* Header if needed */}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/group" element={<GroupRoom/>}/>
      </Routes>
      </BrowserRouter>
    </UserContext>
  )
}

export default App
