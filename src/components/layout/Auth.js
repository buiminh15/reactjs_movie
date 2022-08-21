import React from 'react';
import { Row } from '../common';
import { Input } from '../styles';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required()
  })
  .required();

const SignIn = () => {
  return <div>Sign in</div>;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
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
        />
        <Input label="Email" name="email" {...register('email')} icon={<FiMail />} />
        <Input
          label="Password"
          name="password"
          {...register('password')}
          icon={<RiLockPasswordLine />}
        />
      </Row>
      <input type="submit" value="submit" />
    </form>
  );
};

export { SignIn, SignUp };
