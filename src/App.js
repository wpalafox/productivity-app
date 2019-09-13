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

/*Taking in an event as an argument, the input change 
sets the name of the event target to the value of the 
event target. Essentially taking in whatever typed and adding
to the state */ 

  inputChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  }
  
  addTask = event => {
    event.preventDefault();
    let newTask = {
      task: this.state.todo,
      id: Date.now(),
      completed: false
    };

    this.setState({
        todos: [...this.state.todos, newTask],
        todo: ''
    })
  }

  toggleComplete = itemID => {
    const todos = this.state.todos.map(todo => {
      if (todo.id === itemID) {
        todo.completed = !todo.completed
      }
      return todo

    });
    this.setState({todos, todo: ''})
}

removeItems = event => {
  event.preventDefault();
  this.setState(prevState => {
    return {
      todos: prevState.todos.filter(todo => {
        return !todo.completed;
      })
    }
  })
}

  render() {
    return (
      <div className="App">
        <h1>To-Do List</h1>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}/> 
        <TodoForm
          todos={this.state.todos} 
          value={this.state.todo}
          inputChangeHandler={this.inputChangeHandler}
          addTask={this.addTask}
          removeItems={this.removeItems}
          />
      </div>
        
    )
  }
}

