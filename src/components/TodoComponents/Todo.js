import React from 'react'

export default function Todo(props) {
    return (
        <div
          key={props.todo.id}
          onClick={event => { 
            props.toggleComplete(props.todo.id)
          }}>
           <p>{props.todo.task}</p>
        </div>
    )
}
