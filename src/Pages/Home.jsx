import React from 'react'
import Workboard from '../Components/Workboard'

const Home = () => {
  return (
    <div className='w-screen h-screen flex flex-col bg-sky-950'>
      <div className='w-full p-4 bg-black'>Nav</div>
      {/* Workboard */}
      <div className='flex-1 overflow-hidden'>
        <Workboard />
      </div>
    </div>
  )
}

export default Home