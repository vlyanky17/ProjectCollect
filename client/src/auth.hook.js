import React, { useState,useCallback } from 'react';

const storageName = 'userData'


export const useAuth = isAuth => {



  const login = useCallback((jwtToken, id) => {


    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: jwtToken
    }))
  }, [])


  const logout = useCallback(() => {

    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if (data && data.token) {
      login(data.token, data.userId)
    }
    setReady(true)
  }, [login])


  return { login, logout }

}
