import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addTodo } from '../app/todoSlice'
import { deleteTodo } from '../app/todoSlice'
import { updateTodo } from '../app/todoSlice'
import { toggleDone } from '../app/todoSlice'
import '../App.css'

const Home = () => {
  const [todo, setTodo] = useState('')
  const [description, setDescription] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todoList.items)
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState(null)
  const [updatedDescription, setUpdatedDescription] = useState('')
  const [updatedTodo, setUpdatedTodo] = useState('')

  return (
    <div className="container">
      <div className='typing'>
        <input placeholder='Write a new todo' value={todo} onChange={(e) => setTodo(e.target.value)}></input>

        <input placeholder='Todo description' value={description} onChange={(e) => setDescription(e.target.value)}></input>

        <button className='add-button' onClick={() => {
          dispatch(addTodo({
            id: todos.length + 1,
            todo: todo,
            description: description,
            done:true
          }))
          setTodo('')
          setDescription('')
        }}>
          Add Todo
        </button>
      </div>
      <div className="note">
        <h2>My Todo List</h2>
        <div className="items">
          {todos.map((item, index) => (
            <div className="card" key={index}>
              <h1>{item.todo}</h1>
              <p>{item.description}</p>
              <div className='delete-button'>
                <button style={{ borderRadius: '6px' }} onClick={() => dispatch(deleteTodo(item.id))}>Delete</button>
                <button style={{backgroundColor: item.done? 'green':'red'}} onClick={()=>dispatch(toggleDone(item.id))}>done</button>
                <button onClick={() => {

                  setEdit(true)
                  setId(item.id)

                }}>
                  Edit
                </button>
                <br></br>

                {
                  edit && id === item.id && (
                    <div>
                      <input onChange={(e) => { setUpdatedTodo(e.target.value) }} />

                      <input onChange={(e) => { setUpdatedDescription(e.target.value) }} />
                      <button onClick={() => {
                        dispatch(updateTodo({ id: item.id, todo: updatedTodo, description: updatedDescription }))
                          setEdit(false)
                      }
                      }>Update</button>
                    </div>

                  )
                }

              </div>
            </div>


          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
