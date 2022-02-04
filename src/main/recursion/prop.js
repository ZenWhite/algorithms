import { flat } from 'main/recursion/flat'

const deepEntries = (object) =>
  Object.entries(object).map(([key, value]) =>
    typeof value === 'object' ? deepEntries(value) : [key, value]
  )

export const prop = (object, propName) =>
  flat(deepEntries(object)).filter(
    (item, index, array) => array[index - 1] == propName
  )
