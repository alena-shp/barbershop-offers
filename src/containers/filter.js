import React, { useState } from 'react'
import { connect } from 'react-redux'
import Filter from "./../components/filter"

import {
  setFilterAll,
  setFilterGender,
  setFilterType,
  setFilterPrice,
  clearFilters
} from './../actions/filter'

const FilterContainer = ({
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

  return <Filter filterByGender={filterByGender}
  filterByType={filterByType}
  filterByPrice={filterByPrice}
  setFilterAll={setFilterAll}
  setFilterGender={setFilterGender}
  setFilterType={setFilterType}
  setFilterPrice={setFilterPrice}
  clearFilters={clearFilters}
  filterValue={filterValue}
  onChangeValue={onChangeValue}
  />
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
})(FilterContainer)