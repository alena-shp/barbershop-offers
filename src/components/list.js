import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import './../App.scss'
import { listLoad } from './../actions/list'

const List = ({ listLoad, listData, handleShow }) => {
  console.log('listData', listData)

  useEffect(() => {
    listLoad()
  }, [listLoad])

  return (
    <div className="list">
      {listData.map(({ id, title, description, img }) => (
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
      ))}
    </div>
  )
}

const mapStateToProps = state => ({ listData: state.list })

export default connect(mapStateToProps, { listLoad })(List)
