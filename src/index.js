import { range } from './utils/range'

import { bin } from './main/bin'
import { selectionSort } from './main/sort'
import { sum } from './main/recursion/sum'
import { count } from './main/recursion/count'
import { max } from './main/recursion/max'

const binRes = bin(range(10, 3), 12)
const sortRes = selectionSort([5, 3, 6, 2, 10, -1, 12])
const sumRes = sum([2, 4, 6])
const countRes = count([2, 4, 6])
const maxRes = max([2, 47, 4, 14, 12, 6])

console.log(maxRes)
