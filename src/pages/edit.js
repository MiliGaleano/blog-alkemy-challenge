import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom"
import FormPost from '../components/formPost'
import { useParams } from 'react-router-dom'
import Header from '../components/header'
import Loading from '../components/loading'

const Edit = () => {
    const [post, setPost] = useState()
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
    const posts = JSON.parse(localStorage.getItem('posts'))
    setPost(posts.find(post => post.id === parseInt(id)))
    setLoading(false)
}, [])

    if (loading) return <Loading />
    else return(
        <div>
            <Header />
            <h1>Edit</h1>
            <FormPost postToEdit={post} id={post.id} update={true} />
        </div>
    )
}

export default Edit