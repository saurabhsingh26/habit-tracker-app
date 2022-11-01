import React from 'react'
import Habit from './Habit'

const Lists = ({habits}) => {
  return (
    <div className='Lists'>
      {habits.map((habit)=><Habit habit={habit} key={habit.id}/>)}
    </div>
  )
}

export default Lists
