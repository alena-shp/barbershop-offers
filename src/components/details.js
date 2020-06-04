import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import './../style.scss'

const Details = ({ dataDetails = [], show, handleClose }) => {
  const { gender = [], price, type } = dataDetails
  return (
    <Modal show={show} onHide={handleClose} centered animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Детальная информация</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="details__info">
          <h3 className="details__info-title">Цена</h3>
          {price}
        </div>
        <div className="details__info">
          <h3 className="details__info-title">Тип услуги</h3>
          {type}
        </div>
        <div className="details__info">
          <h3 className="details__info-title">Пол</h3>
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
