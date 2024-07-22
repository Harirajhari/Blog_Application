import React, { useState } from 'react';
import '../style/Profileedit.css';
import Header from './Header';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('Dan Koe');
  const [email, setEmail] = useState('dankoe@gmail.com');
  const [bio, setBio] = useState('This is my bio');
  const [password, setPassword] = useState('');
  const [profilePic, setProfilePic] = useState('/Image/cont1image.png');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save the updated details to the server or state here
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Optionally reset the details to their original state here
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePic(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='bodyProfile'>
      <Header />
      <div className="profile-edit-container">
        <div className="profile-card">
          <div className="profile-image-section">
            <img
              className="profile-image"
              src={profilePic}
              alt="Profile"
            />
            {isEditing && (
              <>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePicChange}
                  className="profile-pic-input"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="custom-file-upload">
                  <i className="fa fa-cloud-upload"></i> +
                </label>
              </>
            )}
          </div>
          <div className="profile-details-section">
            <div className="profile-details-content">
              {isEditing ? (
                <>
                  <div className="input-group">
                    <label>Name:</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label>Bio:</label>
                    <input
                      type="text"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label>Email:</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label>Password:</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="button-group">
                    <button className="save-button" onClick={handleSave}>Save</button>
                    <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                  </div>
                </>
              ) : (
                <div className="profileshow">
                  <h3 className="profile-name">{name}</h3>
                  <p className="profile-bio">{bio}</p>
                  <label className="label-connect">Connect:</label>
                  <p className="profile-email">{email}</p>
                  <button className="edit-button" onClick={handleEdit}>Edit</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;