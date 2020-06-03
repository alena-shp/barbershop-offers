import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './App.scss'
import List from './components/list'
import Details from './components/details'
import Filter from './components/filter'
import { listLoad } from './actions/list'
import { getFilteredValue } from './selectors'
import PaginationItem from './components/pagination'

const App = ({ listLoad, listData, filteredValue }) => {
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
      {filteredValue.length < 5 ? (
        <div className="app__notice">
          Список услуг закончился. <br />
          Вы можете уточнить данные по услугам у менеждера заведения
        </div>
      ) : (
        filteredValue &&
        filteredValue.map(({ id, title, description, img }) => {
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
        })
      )}
      <Details
        idModal={idModal}
        handleClose={handleClose}
        show={show}
        dataDetails={listData[idModal]}
      />
      <PaginationItem />
    </div>
  )
}

const mapStateToProps = state => ({
  listData: state.list,

  filteredValue: getFilteredValue(state)
})

export default connect(mapStateToProps, { listLoad })(App)
