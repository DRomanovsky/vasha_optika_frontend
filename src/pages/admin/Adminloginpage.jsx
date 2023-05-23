import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'
import { login } from '../../http/userApi'
import { observer } from 'mobx-react-lite'
import { Context } from '../../index'
import { useNavigate } from "react-router-dom"
import { ADMIN_ROUTE } from '../../util/consts'

const Adminloginpage =  observer (() => {
  const {user} = useContext(Context)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginIn = async () =>{
    try{
      let data;
      data = await login(email, password)
      user.setUser(data)
      user.setIsAuth(true)
      navigate(ADMIN_ROUTE)
    } catch (e){
      alert(e.response.data.message)
    }
    
  }
  return (
      <div class="wrapper2">
      <div class="loginform">
        <h3>Вход в аккаунт администратора</h3>
        <label htmlFor="username">Username</label>
        <input 
            type="text"
            id="username"
            autoComplete="off"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required    
        />
        <label htmlFor="password">Password</label>
        <input 
            type="password" 
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required 
        />
        <button onClick={loginIn}>Войти</button>
      </div>
    </div>
  )
})

export default Adminloginpage