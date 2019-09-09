import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
    return (
        <div>
            {props.todos.map((todo, id) => (
              <Todo
                todo={todo}
                key={id} />

            ))}




        </div>
    )
}
