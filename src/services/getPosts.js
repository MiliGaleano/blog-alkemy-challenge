const URL = 'https://jsonplaceholder.typicode.com/posts'
const URLUsers = 'https://jsonplaceholder.typicode.com/users'

export function getPosts() {
    return fetch(URL)
    .then(response => response.json())
    .then((json) => {
        localStorage.setItem('posts', JSON.stringify(json))
    })
    .catch(err => console.log(err))
}

export function getOnePost(id) {
    return fetch(`${URL}/${id}`)
    .then(response => response.json())
    .then(json => json)
    .catch(err => console.log(err))
}

export function getAuthor(id) {
    return fetch(URLUsers)
    .then(response => response.json())
    .then(json => json.find(user => user.id === id))
    .catch(err => console.log(err))
}