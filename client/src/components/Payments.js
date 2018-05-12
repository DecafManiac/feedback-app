import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
      />
    ) 
  }
}

export default Payments;
