import React from 'react'
import Header from '../components/header'
import ListGroup from 'react-bootstrap/ListGroup'
import CardPost from '../components/cardPost'

const Home = () => {
    return(
        <>
            <Header activeKey='/' />
            <h1>Latest posts</h1>
            <ListGroup>
                <CardPost title='Hola como va esto es una nota' />
                <CardPost title='Hola como va esto es una nota' />
                <CardPost title='Hola como va esto es una nota' />
                <CardPost title='Hola como va esto es una nota' />
            </ListGroup>
        </>
    )
}

export default Home