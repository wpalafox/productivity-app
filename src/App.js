import React, { Component } from 'react'
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

export default class App extends Component {
  constructor(props){ 
    super(props);
    this.state={
      todos: [{  
      //task: ' ',
      //id: '',
      //completed: false

    }], 
    todo: ''
    

 
   }  
  }
  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <TodoList
          todos={this.state.todos}/> 
        <TodoForm
          todos={this.state.todos} />
      </div>
        
    )
  }
}

