import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from './../../assets/shopping-bag.svg';
import './CartIcon.scss';

import { toggleCartHiden } from './../../redux/cart/cart.actions';

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHiden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
