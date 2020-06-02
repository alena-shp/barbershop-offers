import { LIST_LOAD } from '../types'
import * as data from './../data.json'

const list = data.list

export const listLoad = () => ({
  type: LIST_LOAD,
  payload: list
})
