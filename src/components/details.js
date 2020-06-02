import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import './../App.scss'

const Details = ({ dataDetails = [], show, handleClose }) => {
  const { gender = [], price, type } = dataDetails
  return (
    <Modal show={show} onHide={handleClose} centered animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Детальная информация</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h3>Цена</h3>
          {price}
        </div>
        <div>
          <h3>Тип услуги</h3>
          {type}
        </div>
        <div>
          <h3>Пол</h3>
          {gender.map(e => (
            <p key={e}>{e}</p>
          ))}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Закрыть
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default Details
