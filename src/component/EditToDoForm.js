import React from 'react'
import { useState } from 'react';

const EditToDoForm = ({editToDo, task}) => {

  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editToDo(value, task.id);

    setValue("")
  };

  return (
    <div>
      <>
      <form onSubmit={handleSubmit} >
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='Update task'
          className='p-2 mt-2 ml-0 mr-0 bg-black text-white placeholder-gray-400 border border-violet-600 w-60'
        />
        <button type='submit' className='bg-violet-600 text-white p-2'>Update</button>
      </form>
    </>
    </div>
  )
}

export default EditToDoForm