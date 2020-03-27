import React, { useState,useCallback, useEffect } from 'react';

const storageName = 'userData'


export const useAuth = isAuth => {
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(false)
  const [userId, setUserId] = useState(null)
  const [reservuserId, setreservUserId] = useState(null)
  const [reservLog, setreservLog] = useState(null)
  const [userAdm, setUserAdm] = useState(null)
  const [userLog, setUserLog] = useState(null)
  const [ColId, setColId] = useState(null)
  const [ItId, setItId] = useState(null)
  const login = useCallback((jwtToken, id,Adm,logn,RID,Rlog,Col,Itd) => {
    setToken(jwtToken)
    setUserId(id)
    setUserAdm(Adm)
    setUserLog(logn)
    setreservUserId(RID)
    setreservLog(Rlog)
 
    localStorage.setItem(storageName, JSON.stringify({
      userId: id, token: jwtToken,Adm:Adm,logn:logn,ColId:Col,ItId:Itd,ResId:RID,ResLog:Rlog
    }))
  }, [])


  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    setUserAdm(null)
    setUserLog(null)
    setColId(null)
    setItId(null)
    setreservUserId(null)
    setreservLog(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if (data && data.token) {

      login(data.token, data.userId, data.Adm, data.logn,data.ResId,data.ResLog,data.ColId,data.ItId)
    }
    setReady(true)
  }, [login])


  return { login, logout, token, userId, ready, userAdm,userLog,ColId,ItId,reservuserId}

}
