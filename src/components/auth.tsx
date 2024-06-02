import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';




// Function to check if the JWT is valid
const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('jwtToken'); // or however you store the JWT
  if (!token) {
    return false;
  }

  try {
    // const decoded: DecodedToken = jwtDecode(token);
    // const currentTime = Date.now() / 1000;
    // return decoded.exp > currentTime;
    return true;
  } catch (error) {
    return false;
  }
};

const ProtectedRoute: React.FC = () => {
  if (isAuthenticated()) {
    return <Outlet />;
  }
  return <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
