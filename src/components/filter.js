import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import './../App.scss'
import {
  setFilterAll,
  setFilterGender,
  setFilterType,
  setFilterPrice
} from './../actions/filter'

const MALE = 'мужской'
const FEMALE = 'женский'
const HAIRSTYLE = 'стрижка'
const STYLING = 'стайлинг'
const CARE = 'уход'
const CHEAP = 500
const MIDDLE = 1000
const EXPENSIVE = 2000

const Filter = ({
  setFilterAll,
  setFilterGender,
  setFilterType,
  setFilterPrice
}) => {
  const [filterValue, setFilterValue] = useState('')

  const onChangeValue = e => {
    const filterValue = e.target.value
    setFilterValue(filterValue)
    setFilterAll(filterValue)
  }

  return (
    <div className="filter">
      <Form className="filter__input">
        <Form.Control
          type="text"
          size="lg"
          custom="true"
          placeholder="найти"
          value={filterValue}
          onChange={onChangeValue}
        />
      </Form>
      <div className="filter__value">
        <h1 className="filter__value-title">Быстрый поиск по категориям</h1>
        <div className="filter__item">
          <h3 className="filter__items-title">Пол</h3>
          <div className="filter__item-point">
            <Button
              variant="outline-success"
              onClick={() => {
                setFilterGender(MALE)
              }}
            >
              Мужской
            </Button>
            <Button
              variant="outline-success"
              onClick={() => {
                setFilterGender(FEMALE)
              }}
            >
              Женский
            </Button>
          </div>
        </div>
        <div className="filter__item">
          <h3 className="filter__items-title">Тип услуги</h3>
          <div className="filter__item-point">
            <Button
              variant="outline-danger"
              onClick={() => {
                setFilterType(HAIRSTYLE)
              }}
            >
              Стрижки
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => {
                setFilterType(STYLING)
              }}
            >
              Стайлинг
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => {
                setFilterType(CARE)
              }}
            >
              Уход
            </Button>
          </div>
        </div>
        <div className="filter__item">
          <h3 className="filter__items-title">Цена</h3>
          <div className="filter__item-point">
            <Button
              variant="outline-primary"
              onClick={() => {
                setFilterPrice(CHEAP)
              }}
            >
              до 500 рублей
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => {
                setFilterPrice(MIDDLE)
              }}
            >
              до 1000 рублей
            </Button>
            <Button
              variant="outline-primary"
              onClick={() => {
                setFilterPrice(EXPENSIVE)
              }}
            >
              до 2000 рублей
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

// const mapDispatchToProps = dispatch => ({
//   filterAllValue: filterValue => dispatch(filterAllValue(filterValue)),
// })

export default connect(null, {
  setFilterAll,
  setFilterGender,
  setFilterType,
  setFilterPrice
})(Filter)
