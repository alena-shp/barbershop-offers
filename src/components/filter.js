import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form, Button } from 'react-bootstrap'
import './../App.scss'
import {
  setFilterAll,
  setFilterGender,
  setFilterType,
  setFilterPrice,
  clearFilters
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
  filterByGender,
  filterByType,
  filterByPrice,
  setFilterAll,
  setFilterGender,
  setFilterType,
  setFilterPrice,
  clearFilters
}) => {
  const [filterValue, setFilterValue] = useState('')

  const onChangeValue = e => {
    const filterValue = e.target.value
    setFilterValue(filterValue)
    setFilterAll(filterValue)
  }

  return (
    <div className="filter">
      <Form.Control
        type="text"
        bsCustomPrefix="filter__input"
        custom="true"
        placeholder="Введите текст для поиска..."
        value={filterValue}
        onChange={onChangeValue}
      />
      <div className="filter__value">
        <h1 className="filter__value-title">Быстрый поиск по категориям</h1>
        <div className="filter__item">
          <h3 className="filter__item-title">Пол</h3>
          <div className="filter__item-point">
            <Button
              active={filterByGender === MALE}
              variant="outline-success"
              onClick={() => {
                setFilterGender(MALE)
              }}
            >
              Мужской
            </Button>
          </div>
          <div className="filter__item-point">
            <Button
              active={filterByGender === FEMALE}
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
          <h3 className="filter__item-title">Тип услуги</h3>
          <div className="filter__item-point">
            <Button
              active={filterByType === HAIRSTYLE}
              variant="outline-danger"
              onClick={() => {
                setFilterType(HAIRSTYLE)
              }}
            >
              Стрижки
            </Button>
          </div>
          <div className="filter__item-point">
            <Button
              active={filterByType === STYLING}
              variant="outline-danger"
              onClick={() => {
                setFilterType(STYLING)
              }}
            >
              Стайлинг
            </Button>
          </div>
          <div className="filter__item-point">
            <Button
              active={filterByType === CARE}
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
          <h3 className="filter__item-title">Цена</h3>
          <div className="filter__item-point">
            <Button
              active={filterByPrice === CHEAP}
              variant="outline-primary"
              onClick={() => {
                setFilterPrice(CHEAP)
              }}
            >
              до 500 рублей
            </Button>
          </div>
          <div className="filter__item-point">
            <Button
              active={filterByPrice === MIDDLE}
              variant="outline-primary"
              onClick={() => {
                setFilterPrice(MIDDLE)
              }}
            >
              до 1000 рублей
            </Button>
          </div>
          <div className="filter__item-point">
            <Button
              active={filterByPrice === EXPENSIVE}
              variant="outline-primary"
              onClick={() => {
                setFilterPrice(EXPENSIVE)
              }}
            >
              до 2000 рублей
            </Button>
          </div>
        </div>
        <Button
          variant="secondary"
          onClick={() => {
            clearFilters()
          }}
        >
          Сбросить все фильтры
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = ({ filter }) => ({
  filterByGender: filter.filterByGender,
  filterByType: filter.filterByType,
  filterByPrice: filter.filterByPrice
})

export default connect(mapStateToProps, {
  setFilterAll,
  setFilterGender,
  setFilterType,
  setFilterPrice,
  clearFilters
})(Filter)
