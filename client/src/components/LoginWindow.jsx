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

//name 
  // const handleLoginSuccess = (credentialResponse) => {
  //   const { credential } = credentialResponse;
  //   const { name } = credential ? JSON.parse(atob(credential.split('.')[1])) : {};

  //   console.log(name);

  //   navigate('/userinfo', { state: { name } }); // Redirect to UserInfo page
  // };

//email
  // const handleLoginSuccess = (credentialResponse) => {
  //   const { credential } = credentialResponse;
  //   let email = '';

  //   if (credential) {
  //     const payload = JSON.parse(atob(credential.split('.')[1]));
  //     email = payload.email || '';
  //   }

  //   console.log(email);

  //   navigate('/userinfo', { state: { email } }); // Redirect to UserInfo page
  // };


  const handleLoginSuccess = (credentialResponse) => {
    const { credential } = credentialResponse;

    try {
      if (credential) {
        const decodedToken = JSON.parse(atob(credential.split('.')[1]));
        const { name } = decodedToken;

        console.log(name);
        navigate('/userinfo', { state: { name } }); // Pass the name as state
      }
    } catch (error) {
      console.error('Failed to decode credential:', error);
    }
  };



//     const { credential } = credentialResponse;
//     if (!credential) {
//       console.error("Credential not found in response");
//       return;
//     }

//   try {
//     const { name } = credential ? JSON.parse(atob(credential.split('.')[1])) : {};
//     console.log(name);
//     navigate('/userinfo', { state: { name } });
//   } catch (error) {
//     console.error("Error decoding credential:", error);
//   }
// }


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
          // locale='en_EN'
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