import React from 'react'

export default function Todo(props) {
    return (
        <div>
            <p>{props.todo.task}</p>
        </div>
    )
}
