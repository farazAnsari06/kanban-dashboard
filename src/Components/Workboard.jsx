import { Plus } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'

const Workboard = () => {
  const cards = useSelector((state) => state.cards.cards);

  return (
    <div className='w-full h-full overflow-x-auto overflow-y-hidden p-4'>
      <div className="w-[300px]">
        <button className="w-full h-full flex justify-start items-center gap-2 p-2 px-3 bg-sky-800/30 border border-white/20 backdrop-blur-md shadow-lg rounded-2xl text-white hover:bg-sky-800 transition ease-in 2s">
          <Plus size={18} />
          Add a card
        </button>
      </div>
    </div>
  )
}

export default Workboard