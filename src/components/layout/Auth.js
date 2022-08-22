import React from 'react';
import { Row } from '../common';
import { Input, SocialIcon } from '../styles';
import { FaRegUserCircle } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';

const SignupSchema = yup.object().shape({
  firstName: yup.string().required('Required'),
  lastName: yup.string().required('Required'),
  email: yup.string().email().required('No email provided'),
  password: yup
    .string()
    .required('No password provided')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});
const SigninSchema = yup.object().shape({
  email: yup.string().email().required('No email provided'),
  password: yup
    .string()
    .required('No password provided')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});

const SignIn = ({ handleAuthPage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SigninSchema)
  });
  const onSubmit = (data) => {
    console.log('tete:: ', data);
  };
  return (
    <div className="max-w-[600px] w-full">
      <h2 className="clr-blue-500 my-4 text-center text-4xl font-extrabold capitalize">
        sign in to moonee
      </h2>
      <div className="flex items-center justify-center gap-3">
        <SocialIcon icon={<FcGoogle />} />
        <SocialIcon icon={<FaFacebookF />} />
      </div>
      <p className="clr-gray-500 my-5 text-center">or use your email account:</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <Row colNum={1} rowStyles="mt-8">
          <Input
            label="Email"
            name="email"
            type="email"
            register={register}
            icon={<FiMail />}
            errors={errors}
          />
        </Row>

        <Row colNum={1} rowStyles="mt-8">
          <Input
            label="Password"
            name="password"
            type="password"
            register={register}
            icon={<RiLockPasswordLine />}
            errors={errors}
          />
        </Row>
        <input
          type="submit"
          value="register"
          className="mt-6 w-full cursor-pointer rounded bg-blue-500 px-4 py-2 uppercase text-white duration-300 hover:bg-blue-600"
        />
      </form>
      <p className="clr-gray mt-7 text-center">
        Not a member?{' '}
        <span
          className="cursor-pointer border-b-2 border-blue-600 capitalize text-blue-600"
          onClick={() => handleAuthPage(false)}>
          sign up
        </span>
      </p>
    </div>
  );
};

const SignUp = ({ handleAuthPage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(SignupSchema)
  });
  const onSubmit = (data) => {
    console.log('tete:: ', data);
  };
  return (
    <div className="max-w-[600px]">
      <h3 className="clr-gray-500 text-center text-3xl font-bold uppercase">start for free</h3>
      <h2 className="clr-blue-500 my-4 text-center text-4xl font-extrabold capitalize">
        create account
      </h2>
      <div className="flex items-center justify-center gap-3">
        <SocialIcon icon={<FcGoogle />} />
        <SocialIcon icon={<FaFacebookF />} />
      </div>
      <p className="clr-gray-500 my-5 text-center">or use your email account:</p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <Row>
          <Input
            label="First name"
            name="firstName"
            register={register}
            icon={<FaRegUserCircle />}
            errors={errors}
          />
          <Input
            label="Last name"
            name="lastName"
            register={register}
            icon={<FaRegUserCircle />}
            errors={errors}
          />
        </Row>
        <Row colNum={1} rowStyles="mt-8">
          <Input
            label="Email"
            name="email"
            type="email"
            register={register}
            icon={<FiMail />}
            errors={errors}
          />
        </Row>

        <Row colNum={1} rowStyles="mt-8">
          <Input
            label="Password"
            name="password"
            type="password"
            register={register}
            icon={<RiLockPasswordLine />}
            errors={errors}
          />
        </Row>
        <input
          type="submit"
          value="register"
          className="mt-6 w-full cursor-pointer rounded bg-blue-500 px-4 py-2 uppercase text-white duration-300 hover:bg-blue-600"
        />
      </form>
      <p className="clr-gray mt-7 text-center">
        Already a member?{' '}
        <span
          className="cursor-pointer border-b-2 border-blue-600 capitalize text-blue-600"
          onClick={() => handleAuthPage(true)}>
          sign in
        </span>
      </p>
    </div>
  );
};

export { SignIn, SignUp };
