import { FILTER_VALUE } from "../types"

export const filterAllValue = (filterValue) => ({
  type: FILTER_VALUE,
  payload: filterValue,
})
