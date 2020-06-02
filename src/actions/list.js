import { LIST_LOAD } from "../types"

export const listLoad = (list) => ({
  type: LIST_LOAD,
  payload: list,
})
