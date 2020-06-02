import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './App.scss'
import List from './components/list'
import Details from './components/details'
import Filter from './components/filter'
import { listLoad } from './actions/list'

const App = ({ listLoad, listData }) => {
  const [show, setShow] = useState(false)
  const [idModal, setIdModal] = useState()
  const handleClose = () => setShow(false)

  const handleShow = id => {
    setShow(true)
    setIdModal(id)
  }
  console.log(listData[idModal])

  useEffect(() => {
    listLoad()
  }, [listLoad])

  return (
    <div className="app">
      <Filter />
      {listData.map(({ id, title, description, img }) => {
        return (
          <div key={id}>
            <List
              id={id}
              handleShow={handleShow}
              title={title}
              description={description}
              img={img}
            />
          </div>
        )
      })}
      <Details
        idModal={idModal}
        handleClose={handleClose}
        show={show}
        dataDetails={listData[idModal]}
      />
    </div>
  )
}

const mapStateToProps = state => ({ listData: state.list })

export default connect(mapStateToProps, { listLoad })(App)
