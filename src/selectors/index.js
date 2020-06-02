export const getFilteredValue = state => {
  console.log('selectorList', state.list.list)
  console.log('selectorFilter', state.filter.filterValue)
  if (!state.filter.filterValue) {
    return state.list
  }

  return {
    ...state.list,
    list: [
      ...state.list.list.filter(
        e => e.title.indexOf(state.filter.filterValue) >= 0
      )
    ]
  }

  // [
  //   ...state.list.list.filter(
  //     e => e.title.indexOf(state.filter.filterValue) >= 0
  //   )
  // ]
}
