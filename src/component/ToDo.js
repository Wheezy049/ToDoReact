import React from 'react'
import {FaPenSquare, FaTrash} from 'react-icons/fa';

const ToDo = ({task, deleteToDo, editToDo}) => {
  return (
    <div className='text-white bg-violet-600 flex items-center justify-between p-2 rounded mt-4'>
      <p>{task.task}</p>
      <div className='flex gap-2'>
        <FaPenSquare onClick={() => editToDo(task.id)}/>
        <FaTrash onClick={() => deleteToDo(task.id)} />
      </div>
    </div>
  )
}

export default ToDo