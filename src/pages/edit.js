import React, {useEffect} from 'react'
import { useHistory } from "react-router-dom"
import FormPost from '../components/formPost'

const Edit = () => {

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
        <div>Edit
            <FormPost oldTitle={'este es un titulo'} oldContent={'este es un contenido de nota asjdfg'} update={true} />
        </div>
    )
}

export default Edit