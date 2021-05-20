import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom"
import Header from '../components/header'
import Loading from '../components/loading'
import { useParams } from 'react-router-dom'
import {getOnePost, getAuthor} from '../services/getPosts'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'

const Detail = () => {

    const [post, setPost] = useState()
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

// get token from local storage
const token = localStorage.getItem('token')

// check if there's a token - if not => takes you to login page
let history = useHistory()
useEffect(() => {
    if (!token) {
        history.push("/login")
    }
}, [])

let { id } = useParams()
useEffect(() => {
    getOnePost(id)
    .then(res => {
        setPost(res)
    })
    .catch(() =>  alert("Couldn't reach that post!"))
}, [id])

useEffect(() => {
    if (post) {
        getAuthor(post.userId)
        .then(res => {
            setUser(res)
            setLoading(false)
        })
    }
}, [post])

const handleClickGoBack = () => {
    history.goBack()
}

    if (loading) return <Loading />
    else return(
            <div>
                <Header />
                {!post.title ? 
                <h1>There is no post here!</h1>
                : 
                <Card className='detailDiv'>
                    <Card.Header onClick={() => handleClickGoBack()}><FontAwesomeIcon icon={faLongArrowAltLeft} />{` Back to posts`}</Card.Header>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{`Post ${post.id}`}</Card.Subtitle>
                        <Card.Text>{post.body}</Card.Text>
                        <Button variant="secondary"><a href={`http://www.${user.website}`} target="_blank" rel='noreferrer'>Read on website</a></Button>
                    </Card.Body>
                    <Card.Footer className="text-muted"><a href={`mailto:${user.email}`}><FontAwesomeIcon icon={faUserCircle} />{` ${user.username} - ${user.name}`}</a></Card.Footer>
                </Card>
                }
            </div>
        )
}

export default Detail