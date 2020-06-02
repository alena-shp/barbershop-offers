import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Form, Badge } from 'react-bootstrap'
import './../App.scss'
import { filterAllValue } from './../actions/filter'

const Filter = ({filterAllValue}) => {
  const [filterValue, setFilterValue] = useState('')

  const onChangeValue = e => {
    const filterValue = e.target.value
    setFilterValue(filterValue)
    filterAllValue(filterValue)
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
            <Badge pill="true" variant="primary">
              {' '}
              Мужской
            </Badge>
            <Badge pill variant="danger">
              Женский
            </Badge>
          </div>
        </div>
        <div className="filter__item">
          <h3 className="filter__items-title">Тип услуги</h3>
          <div className="filter__item-point">
            <Badge pill variant="success">
              Стрижки
            </Badge>
            <Badge pill variant="warning">
              Стайлинг
            </Badge>
            <Badge pill variant="light">
              Уход
            </Badge>
          </div>
        </div>
        <div className="filter__item">
          <h3 className="filter__items-title">Цена</h3>
          <div className="filter__item-point">
            <Badge pill variant="dark">
              до 500 рублей
            </Badge>
            <Badge pill variant="dark">
              от 500 до 1000 рублей
            </Badge>
            <Badge pill variant="dark">
              от 1000 рублей
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  filterAllValue: filterValue => dispatch(filterAllValue(filterValue))
})
export default connect(null, mapDispatchToProps)(Filter)
