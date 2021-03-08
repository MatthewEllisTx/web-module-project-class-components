import React from 'react';
import styled from 'styled-components';

const PStyled = styled.p`
  cursor: pointer;
  text-decoration: ${ props => props.completed === true ? 'line-through' : 'none'};
`

export default class Todo extends React.Component {
  constructor(props){
    console.log(props);
    super();
    this.task = props.todoEvent.task;
    this.id = props.todoEvent.id;
  }

  render(){
    return (
      <PStyled onClick={() => this.props.toggleTask(this.id)} completed={this.props.todoEvent.completed}>{this.task}</PStyled>
    )
  }
}
