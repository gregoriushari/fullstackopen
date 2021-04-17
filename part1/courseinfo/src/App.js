import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const App = ()=>{
  const course = 'Half Stack application development'
  const part1 ={
    name : 'Fundamental of React',
    exercise : 10
  }
  const part2 ={
    name : 'Using props to pass data',
    exercise : 7
  }
  const part3 ={
    name : 'State of component',
    exercise : 14
  }
  
  return(
    <div>
      <Header course={course} />
      <Content 
        part1={part1} 
        part2={part2} 
        part3={part3} />

      <Total total ={part1.exercise+part2.exercise+part3.exercise} />
    </div>
  )
}

export default App;
