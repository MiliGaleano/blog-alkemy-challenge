import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
    return(
        <div className='divLogin loading'>
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loading