import {createContext} from 'react'

function noop() {}

export const AuthContext = createContext({
  token: null,
  userId: null,
  Admin: null,
  login: noop,
  logout: noop,
  isAuthenticated: "NotAut"
})
