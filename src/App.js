import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './App.scss'
import List from './components/list'
import Details from './components/details'
import Filter from './components/filter'
import { listLoad } from './actions/list'
import { getFilteredValue } from './selectors'

const App = ({ listLoad, listData, filteredValue }) => {
  console.log('filteredValue', filteredValue)
  const [show, setShow] = useState(false)
  const [idModal, setIdModal] = useState()
  const handleClose = () => setShow(false)

  const handleShow = id => {
    setShow(true)
    setIdModal(id)
  }

  useEffect(() => {
    listLoad()
  }, [listLoad])

  return (
    <div className="app">
      <Filter />
      {filteredValue.list &&
        filteredValue.list.map(({ id, title, description, img }) => {
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

const mapStateToProps = state => ({
  listData: state.list.list,
  filteredValue: getFilteredValue(state)
})

export default connect(mapStateToProps, { listLoad })(App)
