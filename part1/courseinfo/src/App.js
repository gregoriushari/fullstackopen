import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = ()=>{
  const course = 'Half Stack application development'
  const part =[
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
  
  return(
    <div>
      <Header course={course} />
      <Content parts={part}/>
      <Total parts={part} />
    </div>
  )
}

export default App;
