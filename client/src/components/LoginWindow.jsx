import React, { useState } from 'react'
import logo from './../pngegg.png'
// import Btn from './Btn'
import BtnForgot from './BtnForgot'
import { NavLink, useNavigate } from 'react-router-dom'
import { GoogleLogin } from '@react-oauth/google'
import { LoginSocialFacebook } from 'reactjs-social-login'
import { FacebookLoginButton } from 'react-social-login-buttons'
// import { useIntl } from 'react-intl'
// import { Intl } from 'intl'
// import { DisplayNames } from '@formatjs/intl-displaynames'

// import 'intl/locale-data/jsonp/en';
// import axios from 'axios'
// import { useGoogleLogin } from '@react-oauth/google';
// import Iframe from 'react-iframe';

const LoginWindow = () => {
  const navigate = useNavigate();
  // const intl = useIntl(); // Initialize intl
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  // const [profile, setProfile] = useState(null);

  const isDisabled = login === '' || password === '';

  const handleLoginChange = (event) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Действия при отправке формы
  };

  //*********        NAME 

  // const handleLoginSuccess = (credentialResponse) => {
  //   const { credential } = credentialResponse;
  //   const { name } = credential ? JSON.parse(atob(credential.split('.')[1])) : {};

  //   console.log(name);

  //   navigate('/userinfo', { state: { name } }); // Redirect to UserInfo page
  // };

  //*****************      EMAIL

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

  //         ******    *******     ******    ***

  //***************    вариант с обработкой ошибок - рабочий

  // const handleLoginSuccess = (credentialResponse) => {
  //   const { credential } = credentialResponse;

  //   try {
  //     if (credential) {
  //       const decodedToken = JSON.parse(atob(credential.split('.')[1]));
  //       const { name } = decodedToken;

  //       console.log(name);
  //       navigate('/userinfo', { state: { name } }); // Pass the name as state
  //     }
  //   } catch (error) {
  //     console.error('Failed to decode credential:', error);
  //   }
  // };
  //          ********   *********  **********   ********   ****

  //новый вариант ::::::::::::::::::::::::::::::::::::::::::::::::::

  const handleLoginSuccess = (credentialResponse) => {
    const { credential } = credentialResponse;
    try {
      if (credential) {
        navigate('/userinfo', { state: { credential } }); // Pass the entire credential object as state
      }
    } catch (error) {
      console.error('Failed to decode credential:', error);
    }
  };


  //    ****************  с бибилиотекой Intl(многоязычность)

  // const handleLoginSuccess = (credentialResponse) => {
  //   const { credential } = credentialResponse;

  //   try {
  //     if (credential) {
  //       const decodedToken = JSON.parse(atob(credential.split('.')[1]));
  //       const { name } = decodedToken;

  //       const formattedName = new DisplayNames(['en'], { type: 'language' }).of(name);
  //       // const formattedName = new intl.formatDisplayName(name, { type: 'language' }); // Format display name using intl
  //       // const formattedName = intl.formatDisplayName(name, { type: 'language' });

  //       console.log(formattedName);
  //       navigate('/userinfo', { state: { name: formattedName } }); // Pass the formatted name as state
  //     }
  //   } catch (error) {
  //     console.error('Failed to decode credential:', error);
  //   }
  // };

  // второй вариант с обработкой ошибок(только для латиницы)

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
        <form className='login_form' onSubmit={handleSubmit}>
          <div className='login_input'>
            <label htmlFor='login'>Login</label>
            <input name='login' type='text' placeholder='Enter login' value={login} onChange={handleLoginChange} />
          </div>
          <div className='password_input'>
            <label htmlFor='password'>Password</label>
            <input name='password' type="password" placeholder='Enter password' value={password} onChange={handlePasswordChange} />
          </div>
          <div className='btn_section'>
            <NavLink to='/pageforgot' className='nav'>
              <BtnForgot />
            </NavLink>
            <button className={`btn ${isDisabled ? 'disabled' : ''}`} type='submit' disabled={isDisabled}>Login</button>
            {/* <Btn /> */}
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
       {/* {!profile? */}
         <LoginSocialFacebook
          appId='284162668018548'
         
          onResolve={(response) => {
            console.log(response)
            // setProfile(response.data)
          }}
          onReject={(error) => {
            console.log(error)
          }}
        >
          <FacebookLoginButton
          size='32px'
          iconSize='16px'
            iconColor='dark'
            text='signin with Facebook'
            align='center'
           
            // iconFormat={'medium'}
            className='btn_facebook'
            activeStyle={{ background: '#0077ff08', border: '1px #0077ff08'}}
            // background='dark'
            // boxShadow='none'
          style={{
            width: '302px',
              // fontFamily: 'Google Sans',
            fontSize: '14px',
            // fontWidth: '200',
            background: 'white',
            // theme: 'outline',
            color: '#3c4043',
            letterSpacing: '0.45px',
            
          }}
            // onSuccess={handleLoginSuccess}
            // onError={handleLoginError}
           />
           
        </LoginSocialFacebook>
        {/* : ''} */}
        {/* {profile? <div>
          <h1>{profile.name}</h1>
          <img src={profile.picture.data.url} alt='profile_picture'/>
      </div>: ''} */}
    </div>
    </div>
  )
}

export default LoginWindow