import React from 'react'
import { connect } from 'react-redux'
import { Pagination } from 'react-bootstrap'
import './../App.scss'
import { setCurrentPage } from './../actions/filter'

const PaginationItem = ({ countPage, currentPage, setCurrentPage }) => {
  let active = currentPage

  let items = []
  for (let number = 1; number <= countPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    )
  }

  return (
    <div className="pagination-item">
      <Pagination>{items}</Pagination>
    </div>
  )
}

const mapStateToProps = state => ({
  currentPage: state.filter.currentPage
})

export default connect(mapStateToProps, { setCurrentPage })(PaginationItem)
