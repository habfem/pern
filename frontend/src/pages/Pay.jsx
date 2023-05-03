import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const KEY = "NIL"

const Pay = () => {

  const onToken = (token) => {
    console.log(token);
  }
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <StripeCheckout name="habfem Shop"
        image="https://avatars.githubusercontent.com/u/72679550?v=4"
        billingAddress
        shippingAddress
        description=" Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey={KEY}
      >
        <button
          style={{
            border: "none",
            width: 120,
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  )
}

export default Pay