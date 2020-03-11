import {useState, useCallback} from 'react'



export const useAuth = isAuth => {
  const arr =2 ;
  if (isAuth) {  return arr}
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState(null)




}
