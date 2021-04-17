import React from 'react'
import Part from './Part'

const Content = props =>(
    <div>
        <Part part={props.part1} exercise={props.exercise1}/>       
        <Part part={props.part2} exercise={props.exercise2}/>       
        <Part part={props.part3} exercise={props.exercise3}/>       
    </div>
)

export default Content