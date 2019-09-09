import React from 'react'

export default function TodoForm(props) {
    return (
       <form>
           <input
             name='todo'
             type='text'
             placeholder='enter a task' />
          <button>Add a Task</button>
          <button>Remove Completed</button>
        </form>
    )
}
