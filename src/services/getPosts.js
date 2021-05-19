const URL = 'https://jsonplaceholder.typicode.com/posts'

export function getPosts() {
    return fetch(URL)
    .then((response) => response.json())
    .then((json) => json)
    .catch(err => console.log(err))
}