import { FILTER_VALUE } from '../types'

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER_VALUE:
      return action.payload
    default:
      return state
  }
}

export default filterReducer
