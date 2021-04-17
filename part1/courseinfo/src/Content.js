import React from 'react'
import Part from './Part'

const Content = props =>(
    <div>
        <Part part={props.part1} />       
        <Part part={props.part2} />       
        <Part part={props.part3} />       
    </div>
)

export default Content