import React, { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import "./checkoutPage.css";
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
  const [formError, setAmountError] = useState();
  async function paymentInfo(val) {
    const result = await stripe.confirmCardPayment(val, {
      payment_method: {
        card: elements.getElement(CardElement),
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
    if (isNaN(amount) || amount <= 0) {
      setAmountError("Please enter valid amount");
      return;
    }

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
    setAmountError("");
    setAmount(e.target.value);
  };
  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };
  return (
    <div className="checkoutForm">
      <h3>Payment Gateway</h3>
      <form onSubmit={handleSubmit}>
        <div class="inputValue">
          <label>Currency : </label>
          <select
            name="currency"
            onChange={(e) => {
              handleCurrencyChange(e);
            }}
          >
            <option value="usd">USD - US Dollar</option>
            <option value="inr">INR-Indian Rupee</option>
          </select>
        </div>
        <div class="inputValue">
          <label>Amount : </label>
          <input
            class="inputText"
            value={amount}
            name="amount"
            type="text"
            onChange={handleAmountChange}
            placeholder="Enter amount"
            required
          />
        </div>
        <div class="inputValue">
          <label>Card details</label>
          <Card />
        </div>
        <div class="buttonStyles">
          <button type="submit" disabled={!stripe}>
            Submit
          </button>
        </div>

        <label class="error">{formError}</label>
      </form>
    </div>
  );
}

export default CheckoutPage;
