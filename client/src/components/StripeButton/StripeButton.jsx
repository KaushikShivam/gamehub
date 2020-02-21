import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_JcziI8f3be7vZIDrHGc3Kzza00O3PJGIcY';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(response => {
        alert('Payment was successfull');
      })
      .catch(error => {
        console.log('There was some payment error', error);
        alert(
          'There was some issue with the payment. Please use the provided card'
        );
      });
  };

  //TODO: Change the image
  return (
    <StripeCheckout
      label="Pay Now"
      name="GameHub Ltd."
      shippingAddress
      billingAddress
      image="https://i.ibb.co/1vpkSjK/gamehub192.png"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
