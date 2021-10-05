export const count = (list) =>
  list.length == 1 ? 1 : 1 + count(list.splice(1))
