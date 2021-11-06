import React from 'react'
import Tasks from './Tasks'
import AddTask from './AddTask'
const Home = ({
  addTask,
  showAddTask,
  tasks,
  deleteTask,
  toggleReminder
}) => {
  return (
    <>
    { showAddTask && <AddTask onAdd={addTask} /> }
    {tasks.length > 0 ? 
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTask} 
        onToggle={toggleReminder}
      /> 
      : 'No Tasks to Show'}
    </>
  )
}

export default Home
