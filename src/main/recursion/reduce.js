import { head } from 'utils/head'
import { tail } from 'utils/tail'

export const reduce = (fn, list, acc) =>
  list.length ? reduce(fn, tail(list), fn(acc, head(list))) : acc
