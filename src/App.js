import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './App.scss'
import List from './components/list'
import Details from './components/details'
import Filter from './components/filter'
import { listLoad } from './actions/list'
import { getFilteredValue } from './selectors'
import PaginationItem from './components/pagination'

const App = ({ listLoad, pageSize, listData, totalItem, currentPage }) => {
  let countPage = Math.ceil(totalItem.length / pageSize)

  let listItem = totalItem.slice(
    currentPage * pageSize - pageSize,
    currentPage * pageSize
  )

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

  const notice =
    countPage === currentPage ? (
      <div className="app__notice">
        Список услуг закончился. <br />
        Вы можете уточнить данные по услугам у менеждера заведения
      </div>
    ) : null

  return (
    <div className="app">
      <h1 className="app__title">Услуги парикмахерской</h1>
      <Filter />
      {totalItem.length === 0 ? (
        <p className="app__loading">Подождите...</p>
      ) : listItem.length < 0 ? (
        <div className="app__notice">
          Список услуг закончился. <br />
          Вы можете уточнить данные по услугам у менеждера заведения
        </div>
      ) : (
        listItem &&
        listItem.map(({ id, title, description, img }) => {
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
      {notice}
      <Details
        idModal={idModal}
        handleClose={handleClose}
        show={show}
        dataDetails={listData[idModal]}
      />
      <PaginationItem countPage={countPage} />
    </div>
  )
}

const mapStateToProps = state => ({
  listData: state.list,
  currentPage: state.filter.currentPage,
  pageSize: state.filter.pageSize,
  totalItem: getFilteredValue(state)
})

export default connect(mapStateToProps, { listLoad })(App)
