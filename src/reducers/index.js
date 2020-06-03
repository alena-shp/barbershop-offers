import { combineReducers } from 'redux'
import listReducer from './../reducers/list'
import filterReducer from './../reducers/filter'

export const rootReducer = combineReducers({
  list: listReducer,
  filter: filterReducer
})
