import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import { Toaster } from "sonner";
import Home from './Pages/Home';

const App = () => {
  return (
    <>
      <Toaster position="top-right" richColors />
      
      {/*Routes*/}
      <Routes>
        <Route path={'/'} element={<Login />}/>
        <Route path={'/signup'} element={<SignUp />}/>
        <Route path={'/home'} element={<Home />}/>
      </Routes>
    </>
  )
}

export default App