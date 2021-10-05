export const sum = (list) =>
  list.length == 1 ? list[0] : list[0] + sum(list.splice(1))
