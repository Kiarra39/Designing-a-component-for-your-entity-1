// write the component code here
import React from 'react';


const Usercard = () => {
  
  const profilePhoto = 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'; 
  const name = 'Mary Jane';
  const email = 'mary.jane07@gmail.com';
  const phoneNumber = '9984678234';
  const address = 'Somewhere on planet earth';

  return (
    <div className="user-card">
      <img className="profile-photo" src={profilePhoto} alt="Profile" />
      <div className="user-details">
        <h2>{name}</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phoneNumber}</p>
        <p><strong>Address:</strong> {address}</p>
      </div>
    </div>
  );
};

export default Usercard;
