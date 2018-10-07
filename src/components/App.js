import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import Posts from './Posts'
import PostsByCategory from './PostsByCategory'
import PostDetails from './PostDetails'
import EditPost from './EditPost'
import CreatePost from './CreatePost'
import EditComment from './EditComment'
import { withRouter } from 'react-router'
import Four0Four from './Four0Four'

// import './App.css';

import '../assets/styles/bootstrap.min.css'
import {
  Grid,
} from 'react-bootstrap'


class App extends Component {


  render() {
    return (
      <div className="app">
        <Grid>
          <Header />


          <Switch>
            <Route  path="/editpost" component={EditPost} />
            <Route exact path="/" component={Posts} />
            <Route path="/createpost" component={CreatePost} />
            <Route exact path="/:category" component={PostsByCategory} />
            <Route  path="/:category/:post_id" component={PostDetails} />
            <Route path="/editComment" component={EditComment} />
            <Route component={Four0Four} />
          </Switch>

        </Grid>

      </div>
    );
  }
}

export const mapStateToProps = ({state}) => ({state})
export default withRouter(connect(mapStateToProps)(App))


