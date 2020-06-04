import React from 'react'
import './../style.scss'
import { Button, Card } from 'react-bootstrap'


const List = ({ id, title, description, img, handleShow }) => {
  return (
    <Card bsPrefix="list__item" className="text-center">
      <div className="list__wrapper">
        <Card.Img src={img} bsPrefix="list__img" />
      </div>
      <Card.Body bsPrefix="list__body">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={() => handleShow(id)}>
          Подробнее
        </Button>
      </Card.Body>
    </Card>
  )
}

export default List
