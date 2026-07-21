import { Ellipsis, Plus, X } from 'lucide-react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import { addCard, deleteCard, renameCard } from '../features/cards/cardsSlice';

const Workboard = () => {
  const cards = useSelector((state) => state.cards.cards);
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const [listCreation, setListCreation] = useState(false);
  const [listName, setListName] = useState('');
  const [listMenu, setListMenu] = useState(null);
  const [renameList, setRenameList] = useState(null);
  const [newName, setNewName] = useState('');

  console.log(tasks);

  const handleListAdd = () => {
    if(!listName.trim()) {
      toast.warning('Please enter list name.');
      return;
    }

    let newCard = {
      id: uuidv4(),
      name: listName,
      taskCounts: 0,
      taskIds: [],
    }

    dispatch(addCard(newCard));
    setListName('');
    setListCreation(false);
  }

  const handleDeleteCard = (id) => {
    dispatch(deleteCard(id));
    setListMenu(null);
  }

  const handleCardNameChange = (item) => {
    setRenameList(item.id);
    setNewName(item.name);
    setListMenu(null);
  }

  const handleSubmitCardNameChange = (item) => {
    let name = newName.trim();
    
    if(!name) return;

    dispatch(renameCard({id:item.id, name}));

    setRenameList(null);
    setNewName("");
  }

  return (
    <div className='w-full h-full overflow-x-auto overflow-y-hidden p-4'>
      <div className='bg-amber-500 p-5 w-fit flex gap-2'>
        {/* Cards */}
        {cards.map((item, id) => (
          <div key={item.id} className='bg-gray-100 w-72 h-fit p-2 rounded-2xl relative'>
            <div className='flex items-center gap-2 px-2 py-2 flex-shrink-0'>
              {renameList === item.id && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => {
                      handleSubmitCardNameChange(item);
                    }}
                  />
                  <div className='flex-1 text-left bg-white p-2 z-20 rounded-2xl border-sky-500'>
                    <input
                      className='outline-none h-full w-full'
                      onKeyDown={(e) => {
                        if(e.key === 'Enter') {
                          handleSubmitCardNameChange(item);
                        }
                      }} 
                      type="text" value={newName} autoFocus onChange={(e) => setNewName(e.target.value)} />
                  </div>
                </>
              )}
              {renameList !== item.id && (
                <span className='flex-1 text-left'>
                  {item.name.length > 20 ?  `${item.name.slice(0, 20)}...` : item.name}
                </span>
              )}
              <span>{item.taskCounts}</span>
              <button 
                onClick={() => setListMenu(item.id)}
                className='rounded-full h-8 w-8 flex items-center justify-center hover:bg-gray-300 transition duration-[0.2s]'>
                <Ellipsis/>
              </button>
            </div>
            {listMenu === item.id && (
              <div
                onClick={() => setListMenu(false)} 
                className='w-screen h-screen fixed z-10 top-0 left-0'>
              </div>
            )}
            {listMenu === item.id && (
              <div className='absolute w-44 h-fit flex flex-col bg-gray-100 border border-zinc-500 rounded-2xl right-5 top-12 z-20'>
                <button 
                  onClick={() => handleCardNameChange(item)}
                  className='text-left p-3'>
                  Rename list
                </button>
                <div className='w-full h-[0.5px] bg-zinc-500'></div>
                <button
                  onClick={() => handleDeleteCard(item.id)}
                  className='text-left p-3 text-red-400'>
                  Delete list
                </button>
              </div>
            )}
            {/* Tasks */}
            {item.taskIds.map((taskId) => {
              let task = tasks.find(t => t.id === taskId);
              console.log('Task : ', task)
              if(!task) return null;

              return (
                <div key={task.id} className="bg-red-500 p-5">
                  {task.name}
                </div>
              );
            })}
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