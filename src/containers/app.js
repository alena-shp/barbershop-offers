import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { listLoad } from './../actions/list'
import { getFilteredValue } from './../selectors'
import App from './../components/app'

const AppContainer = ({
  listData,
  listLoad,
  pageSize,
  totalItem,
  currentPage
}) => {
  
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

  return (
    <App
      listData={listData}
      countPage={countPage}
      currentPage={currentPage}
      totalItem={totalItem}
      listItem={listItem}
      show={show}
      idModal={idModal}
      handleClose={handleClose}
      handleShow={handleShow}
    />
  )
}

const mapStateToProps = state => ({
  listData: state.list,
  currentPage: state.filter.currentPage,
  pageSize: state.filter.pageSize,
  totalItem: getFilteredValue(state)
})

export default connect(mapStateToProps, { listLoad })(AppContainer)
