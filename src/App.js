import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import moment from "moment";

class App extends Component {
conductor(props);
super(props);

this.state ={
  currentTime: moment().format('LST');
}

  showCurrentTime( ){
    let now = moment().format("LTS");
    this.setState({currentTime: now});
  }
  render() {
    return (
      <div className="App">s
      <div onClick={() => this.showCurrentTime()}
      classname="time-box">
        <p>{this.state.currentTime}</p>
        </div>
      </div>
    );
  }
}

export default App;
