import React, { useState } from 'react';
import { connect } from 'react-redux';
// import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-buttom/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';


import { 
  SignInContainer, 
  SignInTitle, 
  ButtonsBarContainer 
} from './sign-in.styles'

const SignIn = ({ emailSignInStart, googleSignInStart }) => {

  const [userCredentials, setCredentials] = useState({ email: '', password: ''})
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password)
  }


  const handleChange = (event) => {
    const {value, name} = event.target;
    setCredentials({...userCredentials, [name]: value});
  }

  
  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label='email' 
          handleChange={handleChange} 
          name='email' 
          type='email' 
          value={email} 
          required 
        />

        <FormInput
          label='password' 
          handleChange={handleChange} 
          name='password' 
          type='password' 
          value={password} 
          required 
        />

        <ButtonsBarContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton 
            type='button' 
            onClick={googleSignInStart} 
            isGoogleSignIn
          >
            sign in with google
          </CustomButton>
        </ButtonsBarContainer>          
      </form>
    </SignInContainer>
  )
}


const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);