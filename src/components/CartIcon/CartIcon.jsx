import React from 'react';

import { ReactIcon as ShoppingIcon } from './../../assets/shopping-bag.svg';
import './CartIcon.scss';

const CartIcon = () => {
  return (
    <div className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
