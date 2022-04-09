import React, {useState, useEffect, useLayoutEffect} from 'react'
import {v4 as uuid} from 'uuid'

const App = () => {
  const [todos, setTodos] = useState([])
  const [editTodo, setEditTodo] = useState("")
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  

  function toggleChecked(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.compelete = !todo.compelete
    setTodos(newTodos)
  }
  function addTodo(e) {
    setTodos([...todos, {id : uuid(), name : e.target.value, compelete : false} ])
    e.target.value = ""
  }
  function DoEditTodo(e,id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.name = e.target.value
    e.target.value = ""
    setTodos(newTodos)
    setEditTodo("")
  }

  function DoDeleteTodo(id) {
    let newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    newTodos= newTodos.filter(cur => cur != todo)
    setTodos(newTodos)
  }
   
  return (
    <div>
      <input type="text" placeholder="enter your new todo..." onKeyDown={e => {if (e.key === "Enter") addTodo(e)}} />
      <br />
      {todos.map(todo => (
          <label key={todo.id} style={{display:"block",margin:"10px 0",padding:"10px"}}>
            <input type="checkbox" defaultChecked={todo.compelete} onChange={() => toggleChecked(todo.id)} /> 
            {todo.name}
            <a style={{margin:"0 0 0 20px",background:"blue",color:"white",padding:"5px",textDecoration:"none"}} href="#" onClick={() => {setEditTodo(todo)}} >edit</a>
            <a style={{margin:"0 0 0 5px",background:"red",color:"white",padding:"5px",textDecoration:"none"}} href="#" onClick={() => DoDeleteTodo(todo.id)}>delete</a>
          </label>
      ))}
      <button onClick={() => setTodos([])}>Clear Todos</button>
      {editTodo && <div style={{margin:"20px 0"}}>
        <label>edit   </label>
        <input onKeyDown={(e) => {if (e.key === "Enter") DoEditTodo(e, editTodo.id) }} type="text" defaultValue={editTodo.name} />
      </div>}
    </div>
  )
}

export default App