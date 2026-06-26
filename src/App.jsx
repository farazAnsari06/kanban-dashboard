import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'

const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Login />}/>
      <Route path={'/signup'} element={<SignUp />}/>
    </Routes>
  )
}

export default App