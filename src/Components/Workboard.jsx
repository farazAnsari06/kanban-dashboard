import { Ellipsis, Plus, X } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner';
import { addCard } from '../features/cards/cardsSlice';

const Workboard = () => {
  const cards = useSelector((state) => state.cards.cards);
  const dispatch = useDispatch();

  const [listCreation, setListCreation] = useState(false);
  const [listName, setListName] = useState('');
  const [listMenu, setListMenu] = useState(null);

  console.log(cards);

  const handleListAdd = () => {
    if(listName === '') {
      toast.warning('Please enter list name.');
      return;
    }

    let newCard = {
      name: listName,
      taskCounts: 0,
      taskIds: [],
    }

    dispatch(addCard(newCard));
    setListName('');
    setListCreation(false);
  }

  return (
    <div className='w-full h-full overflow-x-auto overflow-y-hidden p-4'>
      <div className='bg-amber-500 p-5 w-fit flex gap-2'>
        {/* Cards */}
        {cards.map((item, id) => (
          <div key={id} className='bg-gray-100 w-72 h-fit p-2 rounded-2xl relative'>
            <div className='flex items-center gap-2 px-2 py-2 flex-shrink-0'>
              <button className='flex-1 text-left'>
                {item.name}
              </button>
              <span>{item.taskCounts}</span>
              <button 
                onClick={() => setListMenu(id)}
                className='rounded-full h-8 w-8 flex items-center justify-center hover:bg-gray-300 transition duration-[0.2s]'>
                <Ellipsis/>
              </button>
            </div>
            {listMenu === id && (
              <div
                onClick={() => setListMenu(false)} 
                className='w-screen h-screen fixed z-10 top-0 left-0'>
              </div>
            )}
            {listMenu === id && (
              <div className='absolute w-44 h-fit flex flex-col bg-gray-100 border border-zinc-500 rounded-2xl right-5 top-12 z-20'>
                <button className='text-left p-3'>
                  Rename list
                </button>
                <div className='w-full h-[0.5px] bg-zinc-500'></div>
                <button className='text-left p-3 text-red-400'>
                  Delete list
                </button>
              </div>
            )}
            <button className='flex w-full items-center p-2 gap-2 hover:bg-gray-300 rounded-2xl transition duration-[0.2s]'>
              <Plus/>
              Add a card
            </button>
          </div>
        ))}
        {listCreation ? (
        <div className='w-72 h-full flex flex-col gap-2 p-2 px-3 bg-gray-100 rounded-2xl'>
          <div className='h-10 px-3 rounded-2xl border border-sky-400 active:border-sky-500'>
            <input
              autoFocus
              className='w-full h-full outline-none' 
              type="text"
              placeholder='List name...'
              value={listName}
              onChange={(e) => {
                setListName(e.target.value);
              }}
            />
          </div>
          <div className='flex justify-start items-center gap-3'>
            <button
              onClick={handleListAdd} 
              className='p-2 px-3 text-white bg-blue-500 rounded-2xl hover:bg-blue-600 transition ease-in 2s'
            >
              Add list
            </button>
            <button onClick={() => {setListCreation(false), setListName('')}}>
              <X size={18}/>
            </button>
          </div>
        </div>
        ) : (
          <div className="w-[300px]">
            <button
              onClick={() => setListCreation(true)} 
              className="w-full h-fit flex justify-start items-center gap-2 p-2 px-3 bg-sky-800/30 border border-white/20 backdrop-blur-md shadow-lg rounded-2xl text-white hover:bg-sky-800 transition ease-in 2s">
              <Plus size={18} />
              Add a card
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Workboard