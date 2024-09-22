'use client'
import TodoList from '@/components/TodoList'
import { useState, useEffect } from 'react'

export default function Home() {
  const [todos, setTodos] = useState([])
  console.log(process.env.NEXT_PUBLIC_API_URL);
  console.log(process.env.TEST_ENV);
  useEffect(() => {
    fetchTodos()
  }, [])

  const fetchTodos = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos`)
    const data = await response.json()
    setTodos(data)
  }

  const addTodo = async (text) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    })
    const newTodo = await response.json()
    setTodos([...todos, newTodo])
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Todo List</h1>
      <TodoList todos={todos} addTodo={addTodo} />
    </main>
  )
}
