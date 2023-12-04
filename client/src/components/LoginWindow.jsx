import React from 'react'
import logo from './../pngegg.png'
import Btn from './Btn'
import BtnForgot from './BtnForgot'
import { NavLink } from 'react-router-dom'

const LoginWindow = () => {
  return (
    <div className='login_window'>
      <div className='login_header'>
        <img src={logo} alt='logo' className='img_logo' />
        <h1>
          Welcome
        </h1>
      </div>
      <form className='login_form'>
        <div className='login_input'>
          <label htmlFor='login'>Login</label>
          <input name='login' type='text' placeholder='Enter login' />
        </div>
        <div className='password_input'>
          <label htmlFor='password'>Password</label>
          <input name='password' type="password" placeholder='Enter password' />
        </div>
        <div className='btn_section'>
          <NavLink to='/pageforgot' className='nav'>
          <BtnForgot />
          </NavLink>
          <Btn />
        </div>
      </form>
    </div>

  )
}

export default LoginWindow