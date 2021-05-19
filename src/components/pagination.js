import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const Pagination = ({totalPages, handlePage, pageNum}) => {

    const pages = [...Array(totalPages).keys()].map(num => num+1)

    return(
        <div className='pagesGroup'>
            <ButtonGroup size="sm">
                {pages.map(page => 
                    <Button variant="secondary" key={page} onClick={() => handlePage(page)} active={page === pageNum ? true : false} >{page}</Button>
                )}
            </ButtonGroup>
        </div>
    )
}

export default Pagination