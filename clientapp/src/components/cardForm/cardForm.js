import React, { useMemo } from "react";
import { CardElement } from "@stripe/react-stripe-js";

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
    // display: "flex",
  },
};
function Card() {
  return (
    <div className={cardStyle}>
      <CardElement />
    </div>
  );
}

export default Card;
