import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
// import { FormattedMessage, IntlProvider } from 'react-intl'; // Import FormattedMessage and IntlProvider


const UserInfo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [name, setName] = useState('');

    // const name = location.state ? location.state.name : '';                       //Name       old version
    // const email = location.state ? location.state.email : ''                      //Name

    // useEffect(() => {
    //     const credential = location.state ? location.state.credential : null;
    //     console.log('Credential:', credential);
    //     if (credential) {
    //         const user = JSON.parse(atob(credential.split('.')[1]));
    //         setName(user.name);
    //         console.log('Logged in as:', user.name); // Log the username to console
    //     } else {
    //         // Handle no user data
    //         navigate('/'); // Redirect to login if no user data is found
    //     }
    // }, [location.state, navigate]);

                                       // :::::::::::::::::::::::::::::::::::::::::::рабочая версия
    // useEffect(() => {
    //     const credential = location.state ? location.state.credential : null;
    //     console.log('Credential:', credential); // Log the credential string
    //     if (credential) {
    //         try {
    //             const tokenParts = credential.split('.');
    //             if (tokenParts.length === 3) {
    //                 const user = JSON.parse(atob(tokenParts[1]));
    //                 setName(user.name);
    //                 console.log('Logged in as:', user.name); // Log the username to console
    //             } else {
    //                 console.error('Invalid token format:', credential);
    //             }
    //         } catch (error) {
    //             console.error('Failed to decode credential:', error);
    //         }
    //     } else {
    //         // Handle no user data
    //         navigate('/'); // Redirect to login if no user data is found
    //     }
    // }, [location.state, navigate]);


    useEffect(() => {
        const credential = location.state ? location.state.credential : null;
        console.log('Credential:', credential); // Log the credential string
        if (credential) {
            try {
                const tokenParts = credential.split('.');
                if (tokenParts.length === 3) {
                    const user = JSON.parse(atob(tokenParts[1]));
                    setName(user.name);
                    console.log('Logged in as:', user.name); // Log the username to console
                } else {
                    console.error('Invalid token format:', credential);
                }
            } catch (error) {
                if (error instanceof DOMException && error.name === 'InvalidCharacterError') {
                    // Attempt to decode using UTF-8 decoding
                    const decodedName = decodeURIComponent(escape(window.atob(JSON.parse(atob(credential.split('.')[1])).name)));
                    setName(decodedName);
                    console.log('Logged in as (UTF-8 decoded):', decodedName); // Log the username to console
                } else {
                    console.error('Failed to decode credential:', error);
                }
            }
        } else {
            // Handle no user data
            navigate('/'); // Redirect to login if no user data is found
        }
    }, [location.state, navigate]);
    
    const handleLogout = () => {
        // Perform logout actions here
        navigate('/'); // Redirect to the login page after logout
    };

  return (
      <div >
          <div >
              <p className='text'>You are logged in as</p>
              <p className='text_name'>{name}</p>
              {/* <p className='text_name'>{email}</p> */}
          </div>
          <div className='btn_goggle'>
              <button className='btn_out' onClick={handleLogout}>Logout</button>
            </div>
      </div>

    //   <IntlProvider locale="en" messages={{}}>
    //       <div>
    //           <div>
    //               <p className='text'>
    //                   <FormattedMessage id='logged_in_as' defaultMessage='You are logged in as' />
    //               </p>
    //               <p className='text_name'>{name}</p>
    //           </div>
    //           <div className='btn_goggle'>
    //               <button className='btn_out' onClick={handleLogout}>
    //                   <FormattedMessage id='logout' defaultMessage='Logout' />
    //               </button>
    //           </div>
    //       </div>
    //   </IntlProvider>
  )
}

export default UserInfo