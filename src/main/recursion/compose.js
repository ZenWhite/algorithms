import { head } from 'utils/head'
import { tail } from 'utils/tail'

export const compose = (n, callbacks) =>
  callbacks.length ? compose(head(callbacks)(n), tail(callbacks)) : n
