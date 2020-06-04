import React from 'react'
import './../style.scss'
import List from './list'
import Details from './details'
import FilterContainer from './../containers/filter'
import PaginationItem from './pagination'

const App = ({
  listData,
  countPage,
  currentPage,
  totalItem,
  listItem,
  show,
  idModal,
  handleClose,
  handleShow
}) => {
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
      <FilterContainer />
      {listData.length === 0 ? (
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

export default App
