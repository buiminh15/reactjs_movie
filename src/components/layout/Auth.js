import React from 'react';
import { Row } from '../common';
import { Input } from '../styles';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiMail } from "react-icons/fi";
import { RiLockPasswordLine } from "react-icons/ri";

const SignIn = () => {
  return <div>Sign in</div>;
};

const SignUp = () => {
  return (
    <div>
      <Row>
        <Input label='First name' icon={<FaRegUserCircle />} />
        <Input label='Last name' icon={<FiMail />} />
        <Input label='First name' icon={<RiLockPasswordLine />} />
      </Row>
    </div>
  );
};

export { SignIn, SignUp };
