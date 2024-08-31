//to check if user is authenticated

import { Navigate } from 'react-router-dom';

function ProtectedRoute({ element, isAuthenticated }) {
  return isAuthenticated ? element : <Navigate to="/" />;
}

export default ProtectedRoute;
