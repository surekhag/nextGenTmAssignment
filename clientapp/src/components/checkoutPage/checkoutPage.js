import React, { useState, useEffect } from "react";
import {
  useStripe,
  useElements,
  CardElement,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
// import "./checkoutPage.css";
import { setSecret } from "../../actions/transactionAction";

import { checkoutSubmitData } from "../../actions/transactionAction";
import { useSelector, useDispatch } from "react-redux";

import Card from "../cardForm/cardForm";
function CheckoutPage() {
  const secretvalue = useSelector((state) => state.checkoutReducer.secretVal);
  const stripe = useStripe();

  const dispatch = useDispatch();
  const elements = useElements();
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("usd");

  async function paymentInfo(val) {
    const result = await stripe.confirmCardPayment(val, {
      payment_method: {
        card: elements.getElement(CardElement),
        // customer: "test customer",
        // description: "test desc",
        billing_details: {
          name: "Jenny Rosen",
          email: "surekha19.mca@gmail.com",
          phone: "4545454545",
        },
        // ship: "sh"
      },
    });
    if (result.error) {
      // To do Show error to your customer
      console.log(result.error.message);
    } else {
      console.log("Payment success");
    }
  }

  useEffect(() => {
    if (secretvalue == "Success") {
      const val = localStorage.getItem("client_secret");
      if (val) {
        paymentInfo(val);
      }
      dispatch(setSecret(null));
    }
  }, [secretvalue]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const card = elements.getElement(CardElement);
    const data = {
      amount,
      currency,
      description: "test",
      shipping: "Ship test",
      card: card,
      billing_details: {
        name: "Jenny Rosen",
      },
    };
    dispatch(checkoutSubmitData(data));
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  return (
    <div className="checkoutForm">
      <form onSubmit={handleSubmit}>
        <select
          name="currency"
          onChange={(e) => {
            handleCurrencyChange(e);
          }}
        >
          <option value="usd">USD - US Dollar</option>
          <option value="inr">INR-Indian Rupee</option>
        </select>{" "}
        <br />
        <input
          value={amount}
          name="amount"
          type="text"
          onChange={handleAmountChange}
          placeholder="Enter amount"
        />{" "}
        <br />
        <Card />
        <button type="submit" disabled={!stripe}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CheckoutPage;
