import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const initialList = [{task: 'eat', id: '0', completed: false}, {task: 'groceries', id: '1', completed: false}];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoList: initialList,
    }
  }

  addTask = newTaskName => {
    const newTask = {
      task: newTaskName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      todoList: [...this.state.todoList, newTask],
    });
  }

  toggleTask = id => {
    this.setState({
      todoList: this.state.todoList.map( item => item.id === id ? {...item, completed: !item.completed} : item),
    });
  }

  removeCompletedTasks = () => {
    this.setState({
      todoList: this.state.todoList.filter( item => !item.completed),
    });
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList list={this.state.todoList} toggleTask={this.toggleTask}/>
        <TodoForm addTask={this.addTask}/>
        <button type='button' onClick={this.removeCompletedTasks}>Remove Completed</button>
      </div>
    );
  }
}

export default App;
