import React from 'react'
import { Button, Card } from 'react-bootstrap'
import './../App.scss'

const List = ({ id, title, description, img, handleShow }) => {
  return (
    <div className="list">
      <Card bsPrefix="list__item" key={id}>
        <Card.Img src={img} bsPrefix="list__img" />
        <Card.Body bsPrefix="list__body">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Подробнее
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default List
