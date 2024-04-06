import React, { useState } from 'react';

const ToDoForm = ({addToDo}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addToDo(value);

    setValue("")
  };

  return (
    <>
      <form onSubmit={handleSubmit} >
        <input
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder='What is the task today?'
          className='p-2 bg-black text-white placeholder-gray-400 border border-violet-600 w-60'
        />
        <button type='submit' className='bg-violet-600 text-white p-2'>Add Task</button>
      </form>
    </>
  );
};

export default ToDoForm;
