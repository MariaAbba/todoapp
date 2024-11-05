import React from 'react'

const Header = ({ todos }) => {
  return (
    <header>
      <h1 className="text-gradient">
        You have {todos} open {todos > 1 || todos === 0 ? 'tasks' : 'task'}
      </h1>
    </header>
  )
}

export default Header
