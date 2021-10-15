import { head } from 'utils/head'
import { tail } from 'utils/tail'
import { flat } from './flat'

export const filter = (fn, list, result = []) =>
  list.length
    ? filter(fn, tail(list), result.concat(fn(head(list)) ? head(list) : []))
    : flat(result)
