import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}






const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = (props) => {
       return (
    <div>
      <Part part={props.part[0].name}
       Exercises={props.part[0].Exercise}/>
      <Part part={props.part[1].name}
       Exercises={props.part[1].Exercise}/>
      <Part part={props.part[2].name}
       Exercises={props.part[2].Exercise}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of Exercise {props.part[0].Exercise + props.part[1].Exercise + props.part[2].Exercise}</p>
  )
}

const App = () => {
  const course = {
    name: 'HALF-STACK-APPLICATION-DEVELOPMENT',
    part: [
      {
        name: 'FUNDAMENTALS-OF-REACT',
        Exercise: 10
      },
      {
        name: 'Using props to pass data is',
        Exercise: 7
      },
      {
        name: 'State of a component is',
        Exercise: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content part={course.part}/>
      <Total part={course.part} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))