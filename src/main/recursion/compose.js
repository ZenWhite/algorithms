export const compose =
  (...functions) =>
  (init) =>
    functions.reduceRight((res, fn) => fn(res), init)
