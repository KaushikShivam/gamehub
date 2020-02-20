import React from 'react';
import { connect } from 'react-redux';
import { addItem } from './../../redux/cart/cart.actions';
import addToCart from './../../assets/addToCart.png';

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  DetailContainer,
  NameContainer,
  PriceContainer
} from './CollectionItem.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer imageUrl={imageUrl}>
      <AddButton onClick={() => addItem(item)} inverted={true}>
        <img src={addToCart} alt="Add to Cart" />
      </AddButton>
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>${price}</PriceContainer>
        <DetailContainer>
          Developed by NetherRealm Studios and published by Warner Bros.
        </DetailContainer>
      </CollectionFooterContainer>
    </CollectionItemContainer>
  );
};

// const CollectionItem = ({ item, addItem }) => {
//   const { name, price, imageUrl } = item;
//   return (
//     <CollectionItemContainer>
//       <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
//       <CollectionFooterContainer>
//         <NameContainer>{name}</NameContainer>
//         <PriceContainer>{price}</PriceContainer>
//       </CollectionFooterContainer>
//       <AddButton onClick={() => addItem(item)} inverted={true}>
//         ADD TO CART
//       </AddButton>
//     </CollectionItemContainer>
//   );
// };

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
