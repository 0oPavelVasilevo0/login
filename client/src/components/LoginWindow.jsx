import React, { useState } from 'react'
import logo from './../pngegg.png'
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
  // const [profile, setProfile] = useState(null);// Инициализируем состояние для профиля

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

  // const handleFacebookLoginSuccess = (response) => {
  //   try {
  //     const { profile } = response.data;
  //     navigate('/userinfo', { state: { profile } }); // Pass the profile object as state
  //   } catch (error) {
  //     console.error('Failed to get Facebook profile data:', error);
  //   }
  // };

  // const handleFacebookLoginSuccess = (response) => {
  //   try {
  //     console.log('Facebook login response:', response); // Log the response from Facebook
  //     const { profile } = response.data;
  //     console.log('Facebook profile:', profile); // Log the Facebook profile
  //     navigate('/userinfo', { state: { profile } });
  //   } catch (error) {
  //     console.error('Failed to get Facebook profile data:', error);
  //   }
  // };

  // const handleFacebookLoginSuccess = (response) => {
  //   try {
  //     console.log('Facebook login response:', response);
  //     const { data } = response; // Destructure 'data' from the response
  //     console.log('Facebook profile:', data); // Log 'data' instead of 'profile'
  //     navigate('/userinfo', { state: { profile: data } }); // Pass 'data' as profile
  //   } catch (error) {
  //     console.error('Failed to get Facebook profile data:', error);
  //   }
  // };

  const handleFacebookLoginSuccess = (response) => {
    try {
      console.log('Facebook login response:', response);
      const { data } = response; // Destructure 'data' from the response
      console.log('Facebook profile:', data); // Log 'data' instead of 'profile'

      // Extract relevant profile information
      const { name, picture } = data;

      // Check if picture data is available
      const pictureUrl = picture && picture.data && picture.data.url;

      // Create the profile object
      const profile = {
        name,
        picture: pictureUrl
      };

      navigate('/userinfo', { state: { profile } }); // Pass 'profile' to UserInfo
    } catch (error) {
      console.error('Failed to get Facebook profile data:', error);
    }
  };

 

  //                                   ::::::::::::::::: с использованием graph.facebook 
  // const handleFacebookLoginSuccess = async (response) => {
  //   try {
  //     console.log('Facebook login response:', response);
  //     const { data } = response; // Destructure 'data' from the response
  //     console.log('Facebook profile:', data); // Log 'data' instead of 'profile'

  //     // Extract relevant profile information
  //     const { name, userID } = data;

  //     // Fetch profile picture in the desired size using Facebook Graph API
  //     const pictureUrl = `https://graph.facebook.com/${userID}/picture?type=large`;

  //     // Create the profile object
  //     const profile = {
  //       name,
  //       picture: pictureUrl
  //     };

  //     navigate('/userinfo', { state: { profile } }); // Pass 'profile' to UserInfo
  //   } catch (error) {
  //     console.error('Failed to get Facebook profile data:', error);
  //   }
  // };

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
    // console.log(response);
    // setProfile(response.data);
    try {
      if (credential) {
        navigate('/userinfo', { state: { credential }}); // Pass the entire credential object as state
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
          onResolve={handleFacebookLoginSuccess} // Callback on successful login
          onReject={handleLoginError} // Callback on login error
          // onResolve={(response) => {
          //   console.log(response)
          //   // setProfile(response.data)
          // }}
          // onReject={(error) => {
          //   console.log(error)
          // }}
        >
          <FacebookLoginButton
          size='32px'
          iconSize='16px'
            iconColor='dark'
            text='signin with Facebook'
            className='btn_facebook'
            align='center'
            activeStyle={{ background: '#0077ff08', border: '1px #0077ff08'}}
          style={{
            width: '302px',
            fontSize: '14px',
            background: 'white',
            color: '#3c4043',
            letterSpacing: '0.45px',
          }}
            // onSuccess={handleLoginSuccess}
            // onSuccess={handleFacebookLoginSuccess}
            // onError={handleLoginError}
           />
           
        </LoginSocialFacebook>
           {/* : ''} 
          {profile? <div>
           <h1>{profile.name}</h1>
           <img src={profile.picture.data.url} alt='profile_picture'/>
       </div>: ''}  */}
    </div>
    </div>
  )
}

export default LoginWindow