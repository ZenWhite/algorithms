export const range = (len, step) =>
  Array(len)
    .fill()
    .map((_, index) => index * step)
