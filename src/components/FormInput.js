import React from 'react'
import { Button } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'

export default function FormInput() {
  const [todos, setTodos] = useState('')
  const userId = 1
  const completed = false

  const handleTodos = (e) => {
    setTodos(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('https://dummyjson.com/todos/add', {
      todos, userId, completed
    })
  }

  return (
    <div class="flex justify-center">
      <input value={todos} onChange={handleTodos} placeholder='Create a new todo...' type="text" class="peer h-9 mr-2 w-full rounded-md px-4 font-thin outline drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 focus:ring-blue-400" />
      <Button onClick={handleSubmit} variant="outline-dark">Add</Button>
    </div>
  )
}
