
import React from 'react';
import capitalize from 'capitalize-first-letter'

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


class Post extends React.Component {


    convertMS = (timestamp) => {

        let yearinseconds = Math.round(timestamp/39420000)
        console.log(yearinseconds);

    }
    render() {
        const { post } = this.props;




        return (
            <div className='post'>
            <Card>
                <CardContent>
                    <Typography
                        // variant=''
                        className='post-header'
                        align='left'
                        >
                        <strong>{capitalize(post.category)} </strong>
                           Posted by {post.author} @ {post.timestamp}
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
                     <Badge color='secondary' badgeContent={post.commentCount}>
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



            </div>



        )
    }

}

export default Post;