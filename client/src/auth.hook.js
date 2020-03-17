import React, { useState,useCallback, useEffect } from 'react';

const storageName = 'userData'


export const useAuth = isAuth => {
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState(null)

  const login = useCallback((jwtToken, id,userAdm) => {
    setToken(jwtToken)
    setUserId(id)
    console.log("???????????????????????????????????????????????")
console.log(userAdm)
    console.log("???????????????????????????????????????????????")
    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: jwtToken
    }))
  }, [])


  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))
    console.log("|||||||||||||||||||||||||")
    console.log(data)
    console.log("|||||||||||||||||||||||||")
    if (data && data.token) {

      login(data.token, data.userId)
    }
    setReady(true)
  }, [login])


  return { login, logout, token, userId, ready }

}
