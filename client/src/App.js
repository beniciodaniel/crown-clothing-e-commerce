import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckOutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sigin-up/sign-in-and-sigin-up.component';

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from './redux/user/user.actions';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  // unsubscribeFromAuth = null

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }


  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />        
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckOutPage}/>
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)} />          
      </Switch>
    </div>
  );
} 


//destructure user reducer
const mapStateToProps = createStructuredSelector ({ 
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
