import { store } from 'react-easy-state'

export const messageState = store({
  myGlobalMessage: 'This is a persistent global message'
})
