import React from 'react';
import '../assets/styles/App.css';
import { Route } from 'react-router-dom'
import Header  from './Header'
import Posts  from './Posts'
import PostsByCategories from './PostsByCategories'
import Comments from './Comments'

class App extends React.Component {

  //
  render() {
      return (
          <div className="app">
             <Header />
             <Route exact path="/" render={() => (
               <Posts />
             )} />
            <Route path="/:category/posts" component={PostsByCategories} />
            <Route path="/:postid/comments" component={Comments} />
          </div>
      )
  }
}


export default App
