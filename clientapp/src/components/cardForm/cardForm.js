import React, { useMemo } from "react";
import {
  useStripe,
  useElements,
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";

const CARD_ELEMENT_STYLES = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};
const cardStyle = {
  style: {
    display: "flex",
  },
};
function Card() {
  return (
    <div className={cardStyle}>
      <label>
        Card details
        <CardElement />
        {/* <CardNumberElement />
        <CardExpiryElement />
        <CardCvcElement /> */}
      </label>
    </div>
  );
}

export default Card;
