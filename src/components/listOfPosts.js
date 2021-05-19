import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import CardPost from '../components/cardPost'

const ListOfPosts = ({posts, page}) => {

    const postsForPage = 10
    const startSlice = (page - 1) * postsForPage
    const finishSlice = startSlice + postsForPage
    const postsShowed = posts.slice(startSlice, finishSlice)

    return(
        <ListGroup>
            {postsShowed.map((post) => 
                <CardPost key={post.id} title={post.title} />
            )}
        </ListGroup>
    )
}

export default ListOfPosts

/* {posts ? posts.map((post) => 
                    <CardPost key={post.id} title={post.title} />
                )
                : <CardPost title='Hola como va esto es una nota' />
                }
*/