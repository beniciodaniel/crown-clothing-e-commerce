import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';

import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link to="/" className='logo-container'>
      <Logo className='logo'/>
    </Link>
    <div className="options">
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/contact'>CONTACT</Link>
      {
        currentUser ?
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className='option' to='/signin'>SIGN IN</Link>
      }
    </div>
  </div>
)

const mapStateToProps = (state) => ({ //state = top level rootreducer
  currentUser: state.user.userReducer
})

export default connect(mapStateToProps)(Header); //transformando em HOC