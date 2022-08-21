import React, { useState } from 'react';
import { SignIn, SignUp } from '../components/layout/Auth';

function AuthContainer() {
  const [isSignIn, setIsSignIn] = useState(false);
  return <div>{isSignIn ? <SignIn /> : <SignUp />}</div>;
}

export default AuthContainer;
