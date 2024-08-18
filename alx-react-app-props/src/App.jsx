//update App.jsx to use UserProvider and pass userData as the context value;
import React from 'react';
import ProfilePage from "./ProfilePage";
import UserContext from './UserContext';
//import { UserProvider } from "./UserContext";

function App() {
  
  const userData = { name: "Jane Doe", email: "jane.doe@example,com" };

  return (
    <UserContext.Provider value={userData}>
        <ProfilePage />
    </UserContext.Provider>

  );
}
export default App
