import { Navigate } from 'react-router-dom';
import { getCookie } from '@/utils/cookie';

export const ProtectedRoute = ({ children }: any) => {
  const uid = getCookie('uid');
  const client = getCookie('client');
  if (!uid || !client) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
