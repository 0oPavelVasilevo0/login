import React from 'react'
import logo from './../pngegg.png'
import LoginInput from './LoginInput'
import PasswordInput from './PasswordInput'
import Btn from './Btn'
import BtnForgot from './BtnForgot'

const LoginWindow = () => {
  return (
    <div className='login_window'>
      <div className='login_header'>
        <img src={logo} alt='logo' className='img_logo' />
        <h1>
          Welcome
        </h1>
      </div>
      <div className='login_form'>
        <LoginInput />
        <PasswordInput />
        <div className='btn_section'>
          <BtnForgot />
          <Btn />
        </div>
      </div>
    </div>

  )
}

export default LoginWindow