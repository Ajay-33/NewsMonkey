import './App.css';

import React, { Component } from 'react'
import News from './components/News';
import NavigationBar from './components/NavigationBar';



export default class App extends Component {

  render() {
    return (
      <div>
      <NavigationBar/>
      <News/>
      </div>
    )
  }
}
