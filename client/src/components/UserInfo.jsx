import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const UserInfo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const name = location.state ? location.state.name : ''

    const handleLogout = () => {
        // Perform logout actions here
        navigate('/'); // Redirect to the login page after logout
    };

  return (
      <div >
          <div >
              <p className='text'>You are logged in as</p>
              <p className='text_name'>{name}</p>
          </div>
          <div className='btn_goggle'>
              <button className='btn_out' onClick={handleLogout}>Logout</button>
            </div>
      </div>
  )
}

export default UserInfo