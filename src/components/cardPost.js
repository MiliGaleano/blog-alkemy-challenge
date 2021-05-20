import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt, faEye } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom"

const CardPost = ({title, id, handleClickDelete}) => {

    let history = useHistory()

    const handleClickDetail = (id) => {
        history.push(`/detail/${id}`)
    }

    const handleClickEdit = (id) => {
        history.push(`/edit/${id}`)
    }

    return(
        <ListGroup.Item action variant="light">
            <div className='justify-between'>
                <p>{title}</p>
                <ButtonGroup size="sm" className='ButtonsPosts'>
                    <Button variant="secondary" onClick={() => handleClickDetail(id)}>
                        <FontAwesomeIcon icon={faEye} />
                    </Button>
                    <Button variant="secondary" onClick={() => handleClickEdit(id)}>
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button variant="secondary" onClick={() => handleClickDelete(id)}>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                </ButtonGroup>
            </div>
        </ListGroup.Item>
    )
}

export default CardPost