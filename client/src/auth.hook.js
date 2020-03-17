import React, { useState,useCallback, useEffect } from 'react';

const storageName = 'userData'


export const useAuth = isAuth => {
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState(null)
  const [userAdm, setUserAdm] = useState(null)
  const [userLog, setUserLog] = useState(null)
  const login = useCallback((jwtToken, id,Adm,logn) => {
    setToken(jwtToken)
    setUserId(id)
    setUserAdm(Adm)
    setUserLog(logn)
    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: jwtToken,Adm:Adm,logn:logn
    }))
  }, [])


  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    setUserAdm(null)
    setUserLog(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if (data && data.token) {

      login(data.token, data.userId, data.Adm, data.logn)
    }
    setReady(true)
  }, [login])

console.log(token)
  console.log(userId)
  console.log(userAdm)
  return { login, logout, token, userId, ready, userAdm,userLog}

}
