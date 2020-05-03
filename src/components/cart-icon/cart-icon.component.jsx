import React from 'react';

// import './cart-icon.styles.scss';
// import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { createStructuredSelector } from 'reselect';

import { CartIconContainer, ShoppingIcon, ItemCountContainer } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={ toggleCartHidden }>
    <ShoppingIcon/>
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);