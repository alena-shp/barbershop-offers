import {
  SET_FILTER_VALUE,
  SET_FILTER_GENDER,
  SET_FILTER_TYPE,
  SET_FILTER_PRICE,
  CLEAR_FILTRES
} from '../types'

export const setFilterAll = filterValue => ({
  type: SET_FILTER_VALUE,
  payload: filterValue
})

export const setFilterGender = filterGender => ({
  type: SET_FILTER_GENDER,
  payload: filterGender
})

export const setFilterType = filterType => ({
  type: SET_FILTER_TYPE,
  payload: filterType
})

export const setFilterPrice = filterPrice => ({
  type: SET_FILTER_PRICE,
  payload: filterPrice
})

export const clearFilters = () => ({
  type: CLEAR_FILTRES
})
