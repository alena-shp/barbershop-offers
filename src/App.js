import React, { useState } from 'react'
import './App.scss'
import List from './components/list'
import Details from './components/details'
import Filter from './components/filter'

const App = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  const handleShow = () => setShow(true)

  return (
    <div className="app">
      <Filter />
      <List handleShow={handleShow} />
      <Details handleClose={handleClose} show={show} />
    </div>
  )
}

export default App
