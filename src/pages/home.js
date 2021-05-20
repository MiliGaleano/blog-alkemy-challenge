import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import ListOfPosts from '../components/listOfPosts'
import {getPosts} from '../services/getPosts'
import Pagination from '../components/pagination'
import { useHistory } from "react-router-dom"
import {deletePost} from '../services/deletePost'
import Loading from '../components/loading'

const Home = () => {

const [posts, setPosts] = useState(JSON.parse(localStorage.getItem('posts')))
const [updatePost, setUpdatePost] = useState(false)
const [loading, setLoading] = useState(true)
const [page, setPage] = useState(1)
const [totalPages, setTotalPages] = useState(0)

 // get token from local storage
 const token = localStorage.getItem('token')
    
 // check if there's a token - if not => takes you to login page
 let history = useHistory()
 useEffect(() => {
     if (!token) {
         history.push("/login")
     }
 }, [])

// handle posts updates
 useEffect(() => {
    const posts = JSON.parse(localStorage.getItem('posts'))
    if (posts) {
        setPosts(posts)
        setTotalPages(Math.ceil(posts.length / 10))
    }
}, [updatePost])

// get posts
useEffect(() => {
    if (!posts) {
        getPosts()
        .then(() => setLoading(false))
        .catch(err => console.log(err))
    } else {
        setLoading(false)
    }
}, [])

const handlePage = (num) => {
    setPage(num)
}


const handleClickDelete = (id) => {
    deletePost(id)
    .then(res => {
        alert(res)
        setUpdatePost(!updatePost)
    })
}

    if (loading) return <Loading />
    else return(
        <>
            <Header activeKey='/' />
            <h1>Latest posts</h1>
            <ListOfPosts posts={posts} page={page} handleClickDelete={handleClickDelete} />
            <Pagination totalPages={totalPages} handlePage={handlePage} pageNum={page} />
        </>
    )
}

export default Home