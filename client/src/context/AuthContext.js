import {createContext} from 'react'

function noop() {}

export const AuthContext = createContext({
  token: null,
  userId: null,
  userAdm: null,
  login: noop,
  logout: noop,
  isAuthenticated: false
})
