import { FILTER_VALUE } from '../types'

const initialFilterValue = {
  filterValue: ''
}

const filterReducer = (state = initialFilterValue, action) => {
  switch (action.type) {
    case FILTER_VALUE:
      return {
        ...state,
        filterValue: action.payload
      }
    default:
      return state
  }
}

export default filterReducer
