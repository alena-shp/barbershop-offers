import {
  SET_FILTER_VALUE,
  SET_FILTER_GENDER,
  SET_FILTER_TYPE,
  SET_FILTER_PRICE,
  CLEAR_FILTRES
} from '../types'

const initialFilterState = {
  filterValue: '',
  filterByGender: null,
  filterByType: null,
  filterByPrice: null
}

const filterReducer = (state = initialFilterState, action) => {
  switch (action.type) {
    case SET_FILTER_VALUE:
      return {
        ...state,
        filterValue: action.payload
      }
    case SET_FILTER_GENDER:
      return {
        ...state,
        filterByGender: action.payload
      }
    case SET_FILTER_TYPE:
      return {
        ...state,
        filterByType: action.payload
      }
    case SET_FILTER_PRICE:
      return {
        ...state,
        filterByPrice: action.payload
      }
    case CLEAR_FILTRES:
      return {
        filterValue: '',
        filterByGender: null,
        filterByType: null,
        filterByPrice: null
      }
    default:
      return state
  }
}

export default filterReducer
