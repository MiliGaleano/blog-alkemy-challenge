import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom"

const Detail = () => {

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
        <div>Detail</div>
    )
}

export default Detail