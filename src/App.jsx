import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tabs from './components/Tabs'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

function App() {
  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: false },
  ])
  const [selectedTab, setSelectedTab] = useState('Open')

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, { input: newTodo, complete: false }]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  const handleEditTodo = (index) => {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  const handleDeleteTodo = (index) => {
    let newTodoList = todos.filter((todo, todoIndex) => index !== todoIndex)
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

const handleSaveData = (currTodos) => {
  localStorage.setItem('todo-app', JSON.stringify({todos: currTodos}))
}

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) {
      return
    }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  

  }, [])
  

  return (
    <>
      <Header todos={todos.length} />
      <Tabs
        todos={todos}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <TodoList
        todos={todos}
        selectedTab={selectedTab}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
      <TodoInput handleAddTodo={handleAddTodo} />
    </>
  )
}

export default App
