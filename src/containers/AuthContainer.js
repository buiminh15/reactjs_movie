import React, { useState } from 'react';
import { SignIn, SignUp } from '../components/layout/Auth';

function AuthContainer() {
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center px-4">
      {isSignIn ? <SignIn handleAuthPage={setIsSignIn} /> : <SignUp handleAuthPage={setIsSignIn} />}
    </div>
  );
}

export default AuthContainer;
