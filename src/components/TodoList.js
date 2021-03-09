// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';

export default class TodoList extends React.Component{
  constructor(props){
    super();
    console.log(props);
  }
  render(){
    return (
      <div>
        {this.props.list.map( todoEvent => <Todo key={todoEvent.id} todoEvent={todoEvent} toggleTask={this.props.toggleTask} />)}
      </div>
    )
  }
}
