import React from 'react'
import Header from '../Header'
import TaskListNumbers from '../TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      
         <Header data={data} />
         <TaskListNumbers data={data} />
         <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard