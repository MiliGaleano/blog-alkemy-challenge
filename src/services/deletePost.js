const URL = 'https://jsonplaceholder.typicode.com/posts'

export function deletePost(id) {
    return fetch(`${URL}/${id}`, {
    method: 'DELETE',
    })
    .then(() => {
        const posts = JSON.parse(localStorage.getItem('posts'))
        const newPosts = posts.filter(post => post.id !== id)
        localStorage.setItem('posts', JSON.stringify(newPosts))
        return 'Deleted!'
    })
    .catch(err => {
        console.log(err)
        alert('Something went wrong, please try again!')
    })
}