export const max = (list) => {
  if (list.length == 2) {
    const [a, b] = list
    return a > b ? a : b
  }

  const n = list[0]
  const subMax = max(list.splice(1))

  return n > subMax ? n : subMax
}
