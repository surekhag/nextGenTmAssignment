const key = require("../../../config/configData");
const stripe = require("stripe")(key.key);
module.exports = {
  create: async (req, res) => {
    const { amount, currency } = req.body;
    console.log("Amount must be greater than 0 ", amount);
    let paymentIntent;
    // try {
    paymentIntent = await stripe.paymentIntents.create({
      // to do converstion of currency
      amount: amount,
      currency: currency,
      payment_method_types: ["card"],
      receipt_email: "surekha19.mca@gmail.com",
      description: "payment intent",
      // payment_method: "",
    });
    // } catch (e) {
    //   console.log("Error", e);
    // }
    console.log("payment content", paymentIntent);

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  },

  // Not used because of Converting circular structure to JSON
  confrimPayment: async (req, res) => {
    console.log("inside confirm payment");
    console.log(req.body);

    await res.send({
      // test: "test",
      message: "Payment has been completed successfully",
    });

    // const { card, billing_details, client_secret } = req.body;
    // console.log(card, billing_details, client_secret);
    // console.log(req.body);
    // Create a PaymentIntent with the order amount and currency
    // const confirmPay = await stripe.confirmCardPayment(
    //   { secret },
    //   {
    //     payment_method: {
    //       card: card,
    //       billing_details: billing_details,
    //     },
    //   }
    // );

    // if (confirmPay.error) {
    //   console.log("error in payment confimation");
    // } else {
    //   if (result.paymentIntent.status === "succeeded") {
    //     res.send({
    //       // test: "test",
    //       message: "Payment has been completed successfully",
    //     });
    //   }
    // }
  },
};
