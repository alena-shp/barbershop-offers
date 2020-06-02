export const getFilteredValue = state => {
  if (!state.filter) {
    return state.list
  }

  return state.list.filter(
    e =>
      e.title.indexOf(state.filter) >= 0 ||
      (e.description && e.description.indexOf(state.filter) >= 0) ||
      e.type.indexOf(state.filter) >= 0
  )
}
