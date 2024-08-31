//nested routes for sub sections like profileDetails and profileSettings
import { Routes, Route, Link } from 'react-router-dom';
import ProfileDetails from './ProfileDetails'; // Corrected path
import ProfileSettings from './ProfileSettings'; // Corrected path

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <ul>
          <li><Link to="details">Profile Details</Link></li>
          <li><Link to="settings">Profile Settings</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
export default Profile;
