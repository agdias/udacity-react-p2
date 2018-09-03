import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../assets/actions';
import { Col, Row } from 'react-bootstrap'
import Post from './Post'

class Posts extends Component {
    
    componentDidMount() {
        const { dispatch } = this.props
       
        dispatch(fetchPosts())
       
    }

    render() {
        
        const { posts } = this.props
        const showingPosts = Object.values(posts)
        return (
            <div>
                <Row className='show-grid'>
                    <Col md={2}>
                      left-column
                    </Col>
                    <Col md={8}>
                      {(showingPosts.length > 0 ) ?
                        showingPosts.map((post) => {
                            
                            return (
                                <Post  post={post} />
                            )
                           
                        }):
                        <p>There are no posts yet </p>             
                      } 

                    </Col>
                    <Col md={2}>
                        left-column
                    </Col>           
                </Row>
                    
              
            </div>
         
      

        )
    }
}

const mapStateToProps  =({posts}) => ({posts})
export default connect(mapStateToProps)(Posts)