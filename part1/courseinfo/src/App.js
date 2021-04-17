import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = ()=>{
  const course ={
    name : 'Half Stack application development',
    part : [
      {
        name : 'Fundamental of React',
        exercise : 10
      },
      {
        name : 'Using props to pass data',
        exercise : 7
      },
      {
        name : 'State of component',
        exercise : 14
      }
    ]
  } 
  
  return(
    <div>
      <Header course={course.name} />
      <Content parts={course.part}/>
      <Total parts={course.part} />
    </div>
  )
}

export default App;
