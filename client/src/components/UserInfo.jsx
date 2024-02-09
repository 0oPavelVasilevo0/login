import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
// import { FormattedMessage, IntlProvider } from 'react-intl'; // Import FormattedMessage and IntlProvider


const UserInfo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    // const { profile } = location.state || {}; // Получаем данные профиля из объекта состояния маршрута

    // const [name, setName] = useState('');
    const [userInfo, setUserInfo] = useState(null);

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
    //                 const user = JSON.parse(window.atob(tokenParts[1]));
    //                 // const user = JSON.parse(base64.decode(tokenParts[1]));
    //                 //  const user = window.atob(JSON.parse(atob(credential.split('.')[1])).name)

    //                 // setName(user.name);//1
    //                 setUserInfo(user);

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

    //           ::::::::::::::::::::       jwt-decode
    // useEffect(() => {
    //     const credential = location.state ? location.state.credential : null;
  
    //     console.log('Credential:', credential); // Log the credential string
    //     if (credential) {
    //         try {
    //             const decodedToken = jwtDecode(credential);
    //             setUserInfo(decodedToken);
    //             console.log('Logged in as:', decodedToken.name); // Log the username to console
    //         } catch (error) {
    //             console.error('Failed to decode credential:', error);
    //         }
    //     } else {
    //         // Handle no user data
    //         navigate('/'); // Redirect to login if no user data is found
    //     }
    // }, [location.state, navigate]);

    useEffect(() => {
        const { credential, profile } = location.state || {};

        if (credential) {
            try {
                const decodedToken = jwtDecode(credential);
                setUserInfo(decodedToken);
                console.log('Logged in with Google as:', decodedToken.name);
            } catch (error) {
                console.error('Failed to decode credential:', error);
                navigate('/');
            }
        } else if (profile) {
            setUserInfo(profile);
            console.log('Logged in with Facebook as:', profile.name);
        } else {
            navigate('/');
        }
    }, [location.state, navigate]);


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
    //             if (error instanceof DOMException && error.name === 'InvalidCharacterError') {
    //                 // Attempt to decode using UTF-8 decoding
    //                 const decodedName = decodeURIComponent(encodeURIComponent(window.atob(JSON.parse(atob(credential.split('.')[1])).name)));
    //                 setName(decodedName);
    //                 console.log('Logged in as (UTF-8 decoded):', decodedName); // Log the username to console
    //             } else {
    //                 console.error('Failed to decode credential:', error);
    //             }
    //         }
    //     } else {
    //         // Handle no user data
    //         navigate('/'); // Redirect to login if no user data is found
    //     }
    // }, [location.state, navigate]);

    const handleLogout = () => {
        // Perform logout actions here
        navigate('/'); // Redirect to the login page after logout
    };

    return (
        // <div >

        //      {userInfo  && ( 
             
        //         <div>
        //             <div >
        //                 <p className='text'>You are logged in as</p>
        //              {userInfo.picture && ( 
                       
        //                      <img src={userInfo.picture} alt="user_picture" /> // Assuming user photo URL is provided in the JWT token
                            
        //                 )}
        //                  <p className='text_name'>{userInfo.name}</p> 
                      

        //                 {/* <p className='text_name'>{email}</p> */}
        //             </div>
        //             <div className='btn_goggle'>
        //                 <button className='btn_out' onClick={handleLogout}>Logout</button>
        //             </div>
        //         </div>
        //     )}
        // </div>

        <div>
            {userInfo && (
                <div>
                    <div>
                        <p className='text'>You are logged in as</p>
                        {userInfo.picture && (
                            <img className='user_picture' src={userInfo.picture} alt="user_picture" />
                        )}
                        <p className='text_name'>{userInfo.name}</p>
                    </div>
                    <div className='btn_goggle'>
                        <button className='btn_out' onClick={handleLogout}>Logout</button>
                    </div>
                </div>
            )}
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