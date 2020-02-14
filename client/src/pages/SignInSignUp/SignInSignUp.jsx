import React from 'react';

import SignIn from './../../components/SignIn/SignIn';
import SignUp from './../../components/SignUp/SignUp';

import { SignInAndSignUpContainer } from './SignInSignUp.styles';

const SignInSignUp = () => {
  return (
    <SignInAndSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInAndSignUpContainer>
  );
};

export default SignInSignUp;
