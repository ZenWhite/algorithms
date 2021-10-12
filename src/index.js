import { range } from './utils/range'

import { bin } from './main/bin'
import { selectionSort } from './main/sort'
import { sum } from './main/recursion/sum'
import { count } from './main/recursion/count'
import { max } from './main/recursion/max'
import { flat } from './main/recursion/flat'
import { map } from './main/recursion/map'
import { qsort } from './main/recursion/qsort'

const binRes = bin(range(10, 3), 12)
const sortRes = selectionSort([5, 3, 6, 2, 10, -1, 12])
const sumRes = sum([2, 4, 6])
const countRes = count([2, 4, 6])
const maxRes = max([2, 47, 4, 14, 12, 6])
const flatRes = flat([
  1,
  2,
  3,
  [4, 5, 6, [7, 8, 9, [10, 11, 12, [13, 14, 15]]]]
])
const mapRes = map((n) => n ** 2, [1, 2, 3, 4, 5, 6, 7, 8, 9])
const qsortRes = qsort([2, 1, -55, 44, 33, 101, 523, 14])

console.log(qsortRes)
