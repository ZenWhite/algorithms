import { head } from 'utils/head'
import { tail } from 'utils/tail'

export const map = (fn, list, result = []) =>
  list.length ? map(fn, tail(list), result.concat(fn(head(list)))) : result
