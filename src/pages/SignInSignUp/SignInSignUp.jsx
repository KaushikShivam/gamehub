import React from 'react';

import SignIn from './../../components/SignIn/SignIn';
import SignUp from './../../components/SignUp/SignUp';

import './SignInSignUp.scss';

const SignInSignUp = () => {
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
