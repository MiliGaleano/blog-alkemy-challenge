import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom"
import FormPost from '../components/formPost'
import Header from '../components/header'

const Create = () => {

// get token from local storage
const token = localStorage.getItem('token')

// check if there's a token - if not => takes you to login page
let history = useHistory()
useEffect(() => {
    if (!token) {
        history.push("/login")
    }
}, [])

    return(
        <>
            <Header activeKey='/create' />
            <h1>Create a post</h1>
            <FormPost />
        </>
    )
}

export default Create