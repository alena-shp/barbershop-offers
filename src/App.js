import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './App.scss'
import List from './components/list'
import Details from './components/details'
import Filter from './components/filter'
import { listLoad } from './actions/list'

const App = ({ listLoad, listData }) => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)

  const handleShow = () => setShow(true)

  useEffect(() => {
    listLoad()
  }, [listLoad])

  return (
    <div className="app">
      <Filter />
      {listData.map(({ id, title, description, gender, price, type, img }) => {
        return (
          <div key={id}>
            <List
              handleShow={handleShow}
              title={title}
              description={description}
              img={img}
            />
            <Details
              handleClose={handleClose}
              show={show}
              gender={gender}
              price={price}
              type={type}
            />
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => ({ listData: state.list })

export default connect(mapStateToProps, { listLoad })(App)
