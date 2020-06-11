import React from "react";
import { CardElement } from "@stripe/react-stripe-js";

const cardStyle = {
  style: {
    margin: "40px 0 20px 0",
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
