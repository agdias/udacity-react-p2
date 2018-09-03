import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import '../assets/styles/app.css';
import '../assets/styles/bootstrap.min.css'

import { Grid } from 'react-bootstrap'
import Header from './Header'
import Posts from './Posts'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Grid>
          <Header />
          <Route   exact path='/'
                 render = {() => (
                    <Posts />
                 )}
                  
                 
           />

        </Grid>
      </div>
    )
  }
}

export default App;
