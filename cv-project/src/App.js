import './App.css';

//components
import Header from './components/Header'
import EducationSection from './components/EducationSection'
import Work from './components/WorkSection'

import React, { Component } from 'react'

export class App extends Component {
  constructor(){
    super()
  }
  render() {
    return (
      <div className="App">

      <h1>Cv - builder</h1>
      <Header />
      <hr></hr>
      <EducationSection />
      <hr></hr>
      <Work />
      <hr></hr>

    </div>
    )
  }
}

export default App
