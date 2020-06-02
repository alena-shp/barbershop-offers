import {
  LIST_LOAD
} from '../types'

const initialListData = {
  list: [],
}

const listReducer = (state = initialListData, action) => {
  switch (action.type) {
    case LIST_LOAD:
      return {
        ...state,
        list: action.payload
      }
    default:
      return state
  }
}

export default listReducer
