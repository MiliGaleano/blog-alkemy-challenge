import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const CardPost = ({title}) => {
    return(
        <ListGroup.Item action variant="light">
            <div className='justify-between'>
                <p>{title}</p>
                <ButtonGroup size="sm">
                    <Button variant="secondary">
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button variant="secondary">
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </Button>
                </ButtonGroup>
            </div>
        </ListGroup.Item>
    )
}

export default CardPost