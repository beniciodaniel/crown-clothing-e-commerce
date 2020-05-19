import React from 'react';
import { connect } from 'react-redux';
// import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-buttom/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart } from '../../redux/user/user.actions';


import { 
  SignInContainer, 
  SignInTitle, 
  ButtonsBarContainer 
} from './sign-in.styles'

class SignIn extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({
        email: '',
        password: '',
      }); //clear the states after succeed
      console.log("You´re logged in!")

    } catch (error) {
      console.log(error)
    }
  }

  handleChange = (event) => {
    const {value, name} = event.target;
    this.setState({[name]: value});
  }

  render() {

    const { googleSignInStart } = this.props;

    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label='email' 
            handleChange={this.handleChange} 
            name='email' 
            type='email' 
            value={this.state.email} 
            required 
          />

          <FormInput
            label='password' 
            handleChange={this.handleChange} 
            name='password' 
            type='password' 
            value={this.state.password} 
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
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
})

export default connect(null, mapDispatchToProps)(SignIn);