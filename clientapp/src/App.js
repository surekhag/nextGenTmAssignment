import React from "react";
import "./App.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutPage from "./components/checkoutPage/checkoutPage";
function App() {
  const stripePromise = loadStripe(
    "pk_test_51GsQPNDTOzzcNN3IvC7vlgmMG1Vy2UnURsNbnjHXld2PyFgDK8Tbjr66gLRlnK1PPxVIfdnxtckuaE7ZtLkoLTxe00uK3oKWSK"
  );

  return (
    <div className="App">
      <Elements stripe={stripePromise}>
        <CheckoutPage />
      </Elements>
    </div>
  );
}

export default App;
