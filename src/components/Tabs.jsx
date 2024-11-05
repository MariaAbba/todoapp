import React from 'react'

const tabs = ['All', 'Open', 'Completed']

const Tabs = ({ todos, setSelectedTab, selectedTab }) => {
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === 'All'
            ? todos.length
            : tab === 'Open'
            ? todos.filter((todo) => !todo.complete).length
            : todos.filter((todo) => todo.complete).length
        return (
          <button
            className={
              'tab-button ' + (tab === selectedTab ? ' tab-selected' : '')
            }
            key={tabIndex}
            onClick={() => setSelectedTab(tab)}
          >
            <h4>{tab} </h4>
            <span>({numOfTasks})</span>
          </button>
        )
      })}
      <hr />
    </nav>
  )
}

export default Tabs

