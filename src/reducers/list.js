import { LIST_LOAD } from '../types'

const listReducer = (state = [], action) => {
  switch (action.type) {
    case LIST_LOAD:
      return action.payload
    default:
      return state
  }
}

export default listReducer
