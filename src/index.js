import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import { store } from './store'
import AppContainer from './containers/app'

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)
