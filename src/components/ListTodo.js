import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ListTodo() {

  const [todos, setTodos] = useState([])

  const loadData = () => {
    axios.get('https://dummyjson.com/todos/user/1')
    .then((res) => {
      setTodos(res.data.todos)
    })
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleDelete = (id) => {
    axios.delete(`https://dummyjson.com/todos/${id}`)
  }

  return (
    <div>
      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item className="d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              {todo.todo}
            </div>
            <Badge onClick={() => handleDelete(todo.userId)} bg="danger" pill> X </Badge>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}
