import React from 'react'
import logo from './../pngegg.png'
import Btn from './Btn'
import BtnForgot from './BtnForgot'
import { NavLink, useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
// import axios from 'axios'
// import { useGoogleLogin } from '@react-oauth/google';
// import Iframe from 'react-iframe';

const LoginWindow = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (credentialResponse) => {
    const { credential } = credentialResponse;
    const { name } = credential ? JSON.parse(atob(credential.split('.')[1])) : {};

    console.log(name);
    // navigate('/userinfo'); // Redirect to UserInfo page
    navigate('/userinfo', { state: { name } }); // Pass the name as state
  };

  const handleLoginError = () => {
    console.log('Login Failed');
  };


  return (

    <div className='container'>
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
      <div className='btn_goggle'>

        <GoogleLogin
          // clientId="<YOUR_CLIENT_ID>"
          environment="TEST"
          theme='outline'
          text='signin_with'
          size='medium'
          width='302'
          locale='en_EN'
          onSuccess={handleLoginSuccess}
          onError={handleLoginError}
        />

        {/* <GoogleLogin
          environment="TEST"
          theme='outline'
          text='signin_with'
          size='medium'
          width='302'
          locale='en_EN'
          onSuccess={onSuccess}
          onError={(error) => console.error('Login Failed:', error)}
          /> */}






      </div>

    </div>

  )
}

export default LoginWindow