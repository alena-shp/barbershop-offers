import {
  SET_FILTER_VALUE,
  SET_FILTER_GENDER,
  SET_FILTER_TYPE,
  SET_FILTER_PRICE,
  CLEAR_FILTRES,
  SET_CURRENT_PAGE
} from '../types'

const initialFilterState = {
  filterValue: '',
  filterByGender: null,
  filterByType: null,
  filterByPrice: null,
  pageSize: 5,
  currentPage: 1
}

const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case SET_FILTER_VALUE:
      return {
        ...state,
        filterValue: action.payload,
        currentPage: 1
      }
    case SET_FILTER_GENDER:
      return {
        ...state,
        filterByGender: action.payload,
        currentPage: 1
      }
    case SET_FILTER_TYPE:
      return {
        ...state,
        filterByType: action.payload,
        currentPage: 1
      }
    case SET_FILTER_PRICE:
      return {
        ...state,
        filterByPrice: action.payload,
        currentPage: 1
      }
    case CLEAR_FILTRES:
      return {
        ...state,
        filterValue: '',
        filterByGender: null,
        filterByType: null,
        filterByPrice: null,
        currentPage: 1
      }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    default:
      return state
  }
}

export default filterReducer
