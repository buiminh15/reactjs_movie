import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function AuthRoute({children}) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (auth) {
      if (!userStorage) {
        toast.info(TOAST_MESSAGES.AUTH_INFO);
        return;
      }
    }
    navigate(path);
  };
  return (
    <div>
      {children}
    </div>
  )
}

export default AuthRoute