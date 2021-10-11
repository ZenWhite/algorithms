export const flat = (arr) =>
  arr.reduce(
    (acc, current) =>
      acc.concat(Array.isArray(current) ? flat(current) : [current]),
    []
  )
