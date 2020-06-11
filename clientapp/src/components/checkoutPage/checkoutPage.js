import React from "react";
// import "./App.css";
// import "@stripe/stripe-js"
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import cardForm from "../cardForm/cardForm";
function CheckoutPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit");
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <select name="currency">
          <option value="us">USD - US Dollar</option>
          <option value="in">INR-Indian Rupee</option>
        </select>
        <input name="amount" type="text" placeholder="Enter amount" />
        {/* <input type="text" placeholder="Enter Card Details" />
        <input type="date" placeholder="MM/YY" title="Select MM/YY" />
        <input type="text" placeholder="Enter CSV" /> */}
        {/* <cardForm> </cardForm> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CheckoutPage;
