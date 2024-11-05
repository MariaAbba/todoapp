import React from 'react'
import TodoCard from './TodoCard'

const TodoList = ({ todos, selectedTab, handleDeleteTodo, handleEditTodo }) => {
  const filteredTodos =
    selectedTab === 'All'
      ? todos
      : selectedTab === 'Open'
      ? todos.filter((todo) => !todo.complete)
      : todos.filter((todo) => todo.complete)

  return filteredTodos.map((todo, todoIndex) => {
    return (
      <TodoCard
        key={todoIndex}
        todoIndex={todoIndex}
        todo={todo}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    )
  })
}

export default TodoList


