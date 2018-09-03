const api = 'http://localhost:3001'


let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {

    'Accept' : 'application/json',
    'Authorization' : token
    
}

//Fetch all categories

export const getCategories = () => {
    return   fetch(`${api}/categories`,{headers})
    .then(response => response.json())
}

// Fetch all posts

export const getPosts = () => {
    
    return fetch(`${api}/posts`, {headers})
    .then(response => response.json())
}

// Update vote score

export  const updateVoteScore = (id, vote) => {
   fetch(`${api}/posts/${id}`,
    {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': token,
            'Content-type': 'application/json'
        },
        body: JSON.stringify({option:vote})
    }
   ).then(response => response.json())
  
}
  

