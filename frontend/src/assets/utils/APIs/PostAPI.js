

const api = 'http://localhost:3001'

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

  const headers = {
    'Accept' : 'application/json',
    'Authorization' : token
  }

export const getPosts = () => {
  return fetch(`${api}/posts`, { headers })
    .then(response => response.json())
    .then(data => data)
}

export const getPostByCategory = (category) => {

   return  fetch(`${api}/${category}/posts`, { headers })
        .then(response => response.json())
        .then(data => data)

}

export const getPostById = (id) => {
  return fetch(`${api}/posts/${id}`, { headers })
         .then(response => response.json())
         .then( data => data )
}

export const getCommentByPost = (postId) => {

  return fetch(`${api}/posts/${postId}/comments`, { headers })
  .then(response => response.json())
  .then(data => data)

}

