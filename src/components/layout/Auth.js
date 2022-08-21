import React from 'react';
import { Row } from '../common';
import { Input } from '../styles';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required()
});

const SignIn = () => {
  return <div>Sign in</div>;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });
  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Input
          label="First name"
          name="firstName"
          {...register('firstName')}
          icon={<FaRegUserCircle />}
          errors={errors}
        />
        <Input
          label="Last name"
          name="lastName"
          {...register('lastName')}
          icon={<FaRegUserCircle />}
          errors={errors}
        />
        <Input
          label="Email"
          name="email"
          {...register('email')}
          icon={<FiMail />}
          errors={errors}
        />
        <Input
          label="Password"
          name="password"
          {...register('password')}
          icon={<RiLockPasswordLine />}
          errors={errors}
        />
      </Row>
      <input type="submit" value="submit" className="mt-6 bg-blue-500 px-4 py-2 text-white" />
    </form>
  );
};

export { SignIn, SignUp };
