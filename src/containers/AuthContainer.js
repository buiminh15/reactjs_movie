import React, { useState } from 'react';
import { SignIn, SignUp } from '../components/layout/Auth';
import { videoBg } from '../utils/images';

function AuthContainer() {
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <div className="relative  h-screen w-full ">
      <video
        src={videoBg}
        className="hidden h-full w-full bg-black object-cover opacity-20 md:block"
        autoPlay
        loop
        muted
      ></video>
      <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center px-4">
        {isSignIn ? (
          <SignIn handleAuthPage={setIsSignIn} />
        ) : (
          <SignUp handleAuthPage={setIsSignIn} />
        )}
      </div>
    </div>
  );
}

export default AuthContainer;
