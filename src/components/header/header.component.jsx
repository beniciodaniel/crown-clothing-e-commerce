import React from 'react';
// import { Link } from 'react-router-dom'; //imported in Styled-Component File

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { auth } from '../../firebase/firebase.utils';

// import './header.styles.scss'; //was changed into Styled Components

import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv  } from './header.styles'

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className='logo'/>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>SHOP</OptionLink>
      <OptionLink to='/contact'>CONTACT</OptionLink>
      {
        currentUser ?
        (<OptionDiv onClick={() => auth.signOut()}>SIGN OUT</OptionDiv>)
        :
        (<OptionLink to='/signin'>SIGN IN</OptionLink>)
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown />
    }
  </HeaderContainer>
)

const mapStateToProps = createStructuredSelector ({ //state = top level rootreducer
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header); //transformando em HOC