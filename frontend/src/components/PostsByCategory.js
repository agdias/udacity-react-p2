import React from 'react'
import { connect } from 'react-redux'
// import {
//     Card,
//     Typography,
//     CardContent,
//     CardActions,
//     Badge,
//     IconButton } from '@material-ui/core'

// import {
//     Comment,

//     Thumb_Down,
//     Score,
//     DeleteIcon,
//     Create
//   } from '@material-ui/icons'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Comment from '@material-ui/icons/Comment'
import Thumb_Up from '@material-ui/icons/ThumbUp'
import Thumb_Down from '@material-ui/icons/ThumbDown'
import Score from '@material-ui/icons/Score'
import DeleteIcon from '@material-ui/icons/Delete'
import Create from '@material-ui/icons/Create'
import Badge from '@material-ui/core/Badge'
import {
    purple,
    red
} from '@material-ui/core/colors'


import { fetchPostsByCategory } from '../assets/actions';

class PostsByCategory extends React.Component {

    componentDidMount() {

        const { dispatch, match  } = this.props

        dispatch(fetchPostsByCategory(match.params.category));
    }

    componentDidUpdate(prevProps) {
        const { dispatch, match } = this.props
         if (match.params.category !== prevProps.match.params.category) {
            dispatch(fetchPostsByCategory(match.params.category))
         }
    }

    render() {

        const { posts } = this.props

        return (
            <div>
                <div className='posts'>

                    {Object.values(posts.postsByCategories).length > 0 ?
                     Object.values(posts.postsByCategories).map((post) => {
                         return (
                             <Card>
                               <CardContent>
                                    <Typography
                                    className='post-header'
                                    align='left'
                                    color=''

                                    >
                                      <strong>{post.category}</strong> Posted by {post.author} @ { post.timestamp }

                                    </Typography>
                                </CardContent>
                                <CardHeader title={post.title} />
                                <CardContent>
                                    <Typography
                                        variant='body2'
                                        color='primary'
                                        className='post-header'

                                        align='left'
                                        >
                                        {post.body}

                                    </Typography>
                                </CardContent>

                                <CardActions disableActionSpacing>
                                  <IconButton aria-label='comments'>
                                    <Badge    color='secondary' badgeContent={post.commentCount}>
                                       <Comment />
                                    </Badge>
                                   </IconButton>
                                   <IconButton  aria-label='Like'>
                                      <Thumb_Up />
                                   </IconButton>
                                   <IconButton aria-label='VoteScore'>
                                      <Badge color='secondary' badgeContent={post.voteScore}>
                                       <Score />
                                      </Badge>
                                   </IconButton>
                                <IconButton aria-label='Disklike'>
                                    <Thumb_Down />
                                </IconButton>

                                <IconButton aria-label='Delete'>
                                    <DeleteIcon />
                                </IconButton>
                                <IconButton aria-label='Create'>
                                    <Create />
                                </IconButton>

                                 </CardActions>

                             </Card>
                            //  <li key={post.id}>
                            //   {post.body}
                            //  </li>
                         )
                     }) :
                     <p> There aren't no posts yet </p>
                    }

                </div>
            </div>
        )
    }
}

const mapStateToProps = (posts) => {

    return ({
        posts
    })
}


export default  connect(mapStateToProps)(PostsByCategory)