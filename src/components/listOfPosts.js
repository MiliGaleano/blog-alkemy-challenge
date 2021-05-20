import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import CardPost from '../components/cardPost'

const ListOfPosts = ({posts, page, handleClickDelete}) => {

    const postsForPage = 10
    const startSlice = (page - 1) * postsForPage
    const finishSlice = startSlice + postsForPage
    const postsShowed = posts.slice(startSlice, finishSlice)

    return(
        <ListGroup>
            {postsShowed.map((post) => 
                <CardPost key={post.id} title={post.title} id={post.id} handleClickDelete={handleClickDelete} />
            )}
        </ListGroup>
    )
}

export default ListOfPosts