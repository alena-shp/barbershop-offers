export const getFilteredValue = state => {
  const { list, filter } = state
  const { filterValue, filterByGender, filterByType, filterByPrice } = filter

  const checkValue = item => {
    if (!filterValue) return true

    return (
      item.title.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0 ||
      (item.description &&
        item.description.toLowerCase().indexOf(filterValue.toLowerCase()) >= 0)
    )
  }

  const checkGender = item => {
    if (!filterByGender) return true

    return (
      item.gender &&
      item.gender.some(gender => gender.toLowerCase() === filterByGender)
    )
  }

  const checkType = item => {
    if (!filterByType) return true

    return item.type.indexOf(filterByType) >= 0
  }

  const checkPrice = item => {
    if (!filterByPrice) return true

    return item.price < filterByPrice
  }

  return list.filter(
    item =>
      checkValue(item) &&
      checkGender(item) &&
      checkType(item) &&
      checkPrice(item)
  )
}
