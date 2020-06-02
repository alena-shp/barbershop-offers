import React, { useState } from 'react'
import './App.scss'
import ListItem from './components/listItem'
import Details from './components/details'

const App = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="app">
      <ListItem handleShow={handleShow} />
      <Details handleClose={handleClose} show={show} />
    </div>
  )
}

export default App
