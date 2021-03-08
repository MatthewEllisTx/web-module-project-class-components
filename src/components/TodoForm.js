import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props){
    super();
    this.state = {
      value: '',
    }
  }

  onChange = evt => {
    this.setState({
      value: evt.target.value,
    });
  }

  submit = evt => {
    evt.preventDefault();
    this.props.addTask(this.state.value);
    this.setState({
      value: '',
    });
  }

  render(){
    return (
      <form onSubmit={this.submit}>
        <label>
          Add task <br/>
          <input type='text' value={this.state.value} onChange={this.onChange}/>
        </label>
        <button type='submit'>AddTask</button>
      </form>
    )
  }
}