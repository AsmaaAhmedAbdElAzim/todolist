import { BeakerIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { useState } from 'react'

export default function CustomForm({addTask}) {

    const[task,setTask] = useState('')

    function saveTaskes(e){
      
     e.preventDefault();
     addTask({
      name: task ,
      checked:false,
      id: Date.now()
     })
     setTask('')
    
    }
  return (<>
  <form
  onSubmit={saveTaskes}
  className='todo'

  >
    <div className='wrapper'>
    <input 
    type="text" 
    id='task'
    className='input'
    placeholder='Enter your task'
    value={task}
    required
    autoFocus
    maxLength={30}
    onChange={(e)=>{
        setTask(e.target.value)
    }}
    />
    <label htmlFor='task'>
        Enter Task
    </label>

    <button 
    className='btn'
    aria-label='add task'
    type='submit'
    >
       <BeakerIcon className="h-6 w-6 text-blue-500" />
    </button>
    </div>
    

    
  </form>
    </>
  )
}
