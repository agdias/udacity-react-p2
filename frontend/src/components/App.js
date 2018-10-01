import React, { Component } from 'react';

import '../assets/styles/main.css';
import { Route } from 'react-router-dom';
import CreatePost from './CreatePost'
import Header from './Header'
import Home from './Home'
import PostDetail from './PostDetail'
import PostsByCategory from './PostsByCategory'
import PostEdit from './PostEdit'
import CommentEdit from './CommentEdit'





class App extends Component {
  render() {
    return (

       <div className='app'>
         <Header />
         <Route exact path='/'
            render={() => (
              <div>
                <Home />
              </div>
            )}
          />
        <Route  path='/postedit'           component={PostEdit}/>
        <Route  path='/create-post'        component={CreatePost}/>
        <Route  path='/:category/posts'    component={PostsByCategory} />
        <Route  path='/postdetails'        component={PostDetail} />
        <Route path='/commentEdit'         component={CommentEdit} />
       </div>

    );
  }
}

export default App;
