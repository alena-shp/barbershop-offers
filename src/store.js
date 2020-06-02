import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import listReducer from './reducers/list'

export const store = createStore(listReducer, composeWithDevTools())
