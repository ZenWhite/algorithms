import { bin } from './main/bin'
import { selectionSort } from './main/sort'

import { range } from './utils/range'

const binRes = bin(range(10, 3), 12)
const sortRes = selectionSort([5, 3, 6, 2, 10, -1, 12])
