export const flat = (list) =>
  list.reduce(
    (list, current) =>
      list.concat(Array.isArray(current) ? flat(current) : [current]),
    []
  )
