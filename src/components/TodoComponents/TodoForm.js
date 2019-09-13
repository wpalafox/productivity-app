import React from 'react'

export default function TodoForm(props) {
    return (
       <form>
           <input
             name='todo'
             value={props.value}
             type='text'
             onChange={props.inputChangeHandler}
             placeholder='enter a task' />
          <button
            onClick={props.addTask}>Add a Task</button>
          <button onClick={props.removeItems}>Remove Completed</button>
        </form>
    )
}
