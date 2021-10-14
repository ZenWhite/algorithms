import { reduce } from 'main/recursion/reduce'

export const flat = (list) =>
  reduce(
    (acc, item) => acc.concat(Array.isArray(item) ? flat(item) : [item]),
    list,
    []
  )
