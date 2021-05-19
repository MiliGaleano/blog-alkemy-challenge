import React, { useEffect, useState } from 'react'
import Header from '../components/header'
import ListOfPosts from '../components/listOfPosts'
import {getPosts} from '../services/getPosts'
import Pagination from '../components/pagination'
import { useHistory } from "react-router-dom"

const Home = () => {

const [posts, setPosts] = useState()
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

useEffect(() => {
    if (!posts) {
        getPosts()
        .then(res => {
            setPosts(res)
            setTotalPages(Math.ceil(res.length / 10))
            setLoading(false)
        })
        .catch(err => console.log(err))
    } else {
        setLoading(false)
    }
}, [])

const handlePage = (num) => {
    setPage(num)
}

    if (loading) return <p>loading</p>
    else return(
        <>
            <Header activeKey='/' />
            <h1>Latest posts</h1>
            <ListOfPosts posts={posts} page={page} />
            <Pagination totalPages={totalPages} handlePage={handlePage} pageNum={page} />
        </>
    )
}

export default Home