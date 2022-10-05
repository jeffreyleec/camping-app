import React, { useState, useEffect, useRef, useContext } from 'react'
import axios from 'axios'
import AuthContext from '../providers/AuthProvider'

import './styles/Login.scss'

const Login = () => {
  const { setAuth } = useContext(AuthContext)
  const userRef = useRef()
  const errRef = useRef()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  // const [success, setSuccess] = useState(false)

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [email, password])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post(
        `/api/login`,
        JSON.stringify({ email, password }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      console.log(JSON.stringify(response?.data))
      console.log(JSON.stringify(response))
      setAuth({ email, password })
      setEmail('')
      setPassword('')
      // setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response')
      } else if (err.response?.status === 400) {
        setErrMsg('Missing Username or Password')
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized')
      } else {
        setErrMsg('Login Failed')
      }
      errRef.current.focus()
    }
  }

  // console.log(state)
  return (
    <div id='container'>
      <div className='form-container'>
        <h1>Login</h1>
        {/* <p
        ref={errRef}
        className={errMsg ? 'errmsg' : 'offscreen'}
        aria-live='assertive'
      >
        {errMsg}
      </p> */}
        <div>
          <form className='form' onSubmit={handleSubmit}>
            <div>
              {/* <label for='inputEmail1'>Email address</label> */}
              <input
                className='input-email'
                ref={userRef}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                id='inputEmail1'
                placeholder='Enter email'
                name='email'
                value={email}
              />
            </div>
            <div>
              {/* <label for='inputPassword'>Password</label> */}
              <input
                className='input-password'
                ref={userRef}
                type='password'
                id='inputPassword'
                placeholder='Password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              onClick={(e) => (window.location.href = '/bookings')}
              className='btn-form'
              type='submit'
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login