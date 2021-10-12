import { head } from 'utils/head'
import { tail } from 'utils/tail'

export const qsort = (list) => {
  const prop = head(list) //Опорный элемент

  return list.length < 2
    ? list
    : [
        ...qsort(tail(list).filter((i) => i < prop)),
        prop,
        ...qsort(tail(list).filter((i) => i > prop))
      ]
}
