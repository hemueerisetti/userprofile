import React from 'react';
import './userprofile.css';

const UserProfile = ({   }) => {
  return (
    <div className="user-profile">
      <div className="profile-card">
        <div className="profile-info">
          <img src="" alt="User Avatar" className="profile-img" />
          <h2 className="user-name">regNo</h2>
          <p className="user-job">password</p>
        </div>
        <div className="profile-details">
          <h3>Information</h3>
          <p><strong>Email:</strong> email</p>
          <p><strong>Phone:</strong> phone</p>
          <h3>Projects</h3>
          <p><strong>Recent:</strong> project</p>
          <p><strong>Most Viewed:</strong>project</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
