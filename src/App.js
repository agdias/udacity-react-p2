import React, { Component } from 'react';
import './App.css';
import Header from  './components/Header'
class App extends Component {
  componentDidMount() {
    console.log(this.props.store)
  }

  render() {

    return (
      <div className="App">
        <Header />

      </div>
    );
  }
}







export default App;
