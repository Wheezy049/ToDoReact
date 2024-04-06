import React, { useState, useEffect } from 'react';
import ToDoForm from './ToDoForm';
import {v4 as uuivd4} from 'uuid';
import ToDo from './ToDo';
import EditToDoForm from './EditToDoForm';
uuivd4();

const ToDoWrapper = () => {
  
  const [todos, setTodos] = useState([])

  const addToDo = (todo) =>{
    setTodos([...todos, {id: uuivd4(), task: todo, isEditing: false}])
  }

  const deleteToDo = (id) =>{
     setTodos(todos.filter(todo => todo.id !== id))
  }

  const editToDo = (id) =>{
     setTodos(todos.map( todo => todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))
  }

  const editTask = (task, id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing}: todo ))
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  
  return (
    <div className="bg-violet-600">
      <div className='flex justify-center h-screen items-center'>
        <div className='bg-black w-auto p-8 border-solid border border-black shadow-md rounded'>
         <ToDoForm addToDo={addToDo} editToDo={editToDo}/>
         {todos.map((todo, index)=>(
          todo.isEditing ? (
            <EditToDoForm editToDo={editTask} task={todo}/>
          ):(
             <ToDo task={todo} key={index} deleteToDo={deleteToDo} editToDo={editToDo}/>
          )
         ))}
         </div>
      </div>
    </div>
  )
}

export default ToDoWrapper