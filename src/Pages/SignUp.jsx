import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='w-screen h-screen bg-black flex justify-center items-center'>
      <div className='w-[30%] h-[70%] border border-zinc-500 rounded-2xl'>
        <Link to={'/'}>
          <p className='text-white'>Login</p>
        </Link>
      </div>
    </div>
  )
}

export default SignUp