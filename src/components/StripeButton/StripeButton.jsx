import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_JcziI8f3be7vZIDrHGc3Kzza00O3PJGIcY';

  const onToken = token => {
    console.log(token);
    alert('Payment successfull');
  };

  //TODO: Change the image
  return (
    <StripeCheckout
      label="Pay Now"
      name="GameHub Ltd."
      shippingAddress
      billingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
