import React, { Component } from 'react';
import Todo from './Todo.js';
import './App.css';
import Signin from './Signin.js';
import Particles from 'react-particles-js';
import Navigation from './Navigation.js'
import { stat } from 'fs';
const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      inputField: '',
      taskList: [],
      route: 'signin',
      isSignedIn :false
    }
  }
  
  onsearchChange = (event) => {

    event.preventDefault();
    this.setState({ inputField: event.target.value });

  }
  onSubmit = (e) => {
    //console.log("Working");

 e.preventDefault();
    //console.log(this.state.inputField);
    if(this.state.inputField===""){
      alert('Please add a task')

    }else{
    this.setState(state => {
      state.taskList.push(this.state.inputField);
    })

  }
    this.setState({inputField:''});


  }
  onRouteChange =(route) =>{
    if(route==='signout'){
      this.setState({isSignedIn:false})
    }
    else if(route==='home'){
      this.setState({isSignedIn:true})

    }
    this.setState({ route: route })

  }
 /*  onDelete = (event) => {
    
    this.setState({})
    })
  } */

  render() {
    return (
      <div className="">
             <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />

      {this.state.route==='signin'?
             <Signin onRouteChange = {this.onRouteChange} />:
             <div className="container">

             <Todo taskList={this.state.taskList} searchChange={this.onsearchChange} onSubmit={this.onSubmit} />
</div>
            
        
      }
  </div>

    );
  }
}

export default App;
