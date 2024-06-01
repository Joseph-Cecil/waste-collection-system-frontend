import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode';

// Define the shape of the decoded JWT
interface DecodedToken {
  exp: number; // Expiration time in seconds
}

// Function to check if the JWT is valid
const isAuthenticated = (): boolean => {
  const token = localStorage.getItem('jwt'); // or however you store the JWT
  if (!token) {
    return false;
  }

  try {
    const decoded: DecodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp > currentTime;
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
