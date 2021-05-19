const URL = 'https://jsonplaceholder.typicode.com/posts'

export function createPost(values) {
    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify({
          title: values.title,
          body: values.content,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        return 'Posted! Great job!'
    })
    .catch(err => {
        console.log(err)
        alert('Something went wrong, please try again!')
    })
}

export function updatePost(values) {
    return fetch(`${URL}/1`, {
        method: 'PUT',
        body: JSON.stringify({
          id: 1,
          title: values.title,
          body: values.content,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    .then((response) => response.json())
    .then((json) => {
        console.log(json)
        return 'Updated! Great job!'
    })
    .catch(err => {
        console.log(err)
        alert('Something went wrong, please try again!')
    })
}