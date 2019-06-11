import React, { Component } from 'react';
import Todo from './Todo.js';
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      inputField: '',
      taskList: []
    }
  }
  onsearchChange = (event) => {

    event.preventDefault();
    this.setState({ inputField: event.target.value });

  }
  onSubmit = () => {
    //console.log("Working");

    console.log(this.state.inputField);
    this.setState(state => {
      state.taskList.push(state.inputField);
    })
    console.log(this.state.taskList);
  }
  render() {
    return (
      <div className="container">
        <div className="zone green">News</div>
        <div className="zone red">
          <Todo taskList={this.state.taskList} searchChange={this.onsearchChange} onSubmit={this.onSubmit} />
        </div>
        <div className="zone blue">Task 3</div>
      </div>

    );
  }
}

export default App;
