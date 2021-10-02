/* Сортировка выбором */

const findSmallest = (arr) => {
  let sm = arr[0]
  let smIdx = 0

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < sm) {
      sm = arr[i]
      smIdx = i
    }
  }

  return smIdx
}

export const selectionSort = (arr) => {
  const result = []

  //До 1/2 массива
  for (let i = 0; i < arr.length; i++) {
    const sm = findSmallest(arr)

    result.push(arr.splice(sm, 1)[0])
  }

  return result.concat(arr)
}
