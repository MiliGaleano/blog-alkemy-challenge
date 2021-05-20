const URL = 'https://jsonplaceholder.typicode.com/posts'

export function createPost(values) {

  const newPost = {
    title: values.title,
    body: values.content,
    userId: 1,
  }

    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        const posts = JSON.parse(localStorage.getItem('posts'))
        const createdPost = {...newPost, id: (posts[posts.length - 1].id) + 1}
        const newPosts = posts.concat(createdPost)
        localStorage.setItem('posts', JSON.stringify(newPosts))
        return 'Posted! Great job!'
    })
    .catch(err => {
        console.log(err)
        alert('Something went wrong, please try again!')
    })
}

export function updatePost(values, postToEdit) {

  const updatedPost = {
    id: postToEdit.id,
    title: values.title,
    body: values.content,
    userId: postToEdit.userId,
  }

    return fetch(`${URL}/${postToEdit.id}`, {
        method: 'PUT',
        body: JSON.stringify(updatedPost),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        const posts = JSON.parse(localStorage.getItem('posts'))
        const newPosts = posts.map(post => (post.id === postToEdit.id) ? updatedPost : post)
        localStorage.setItem('posts', JSON.stringify(newPosts))
        return 'Updated! Great job!'
    })
    .catch(err => {
        console.log(err)
        alert('Something went wrong, please try again!')
    })
}