export  function    epochToDateTime(timestamp) {
    const dateObject = new Date(timestamp)
    const year = dateObject.getFullYear()
    const month = dateObject.getMonth() + 1
    const  day = dateObject.getUTCDate()
    return `${day}.${month}.${year}`
  }

  export function genUUID () {
    const uuid = require('uuid/v1')
    const id = uuid().split('-')
    return id[0]

  }

//   upVote = (id) => {
//     const { dispatch } = this.props

//     ReadableAPI.updateVoteScore(id, 'upVote')
//     dispatch(updatePost(id))

// }

// downVote = (id) => {
//   const { dispatch } = this.props

//   ReadableAPI.updateVoteScore(id, 'downVote')
//   dispatch(updatePost(id))

// }

