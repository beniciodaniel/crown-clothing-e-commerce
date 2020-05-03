import React from 'react';
// import CustomButton from '../custom-buttom/custom-button.component'; //both commented because StyledComponents
// import './cart-dropdown.styles.scss';

import CartItem from '../cart-item/cart-item.component';

import { connect } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import { createStructuredSelector } from 'reselect';

import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer, CartDropdownButton } from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => ( //history coming from connect connection with withRouter //dispatch comes with the props automatically
  <CartDropdownContainer>
    <CartItemsContainer>    
      {        
        cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )
      }
    </CartItemsContainer>
    <CartDropdownButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden())
    }}>
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector ({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
//Since the withRouter wraps the connect, the props provided by withRouter (i.e. history, match etc.) will be available in the mapStateToProps function you pass to connect on the ownProps property. 