const key = require("../../../config/configData");
const stripe = require("stripe")(key.key);
const files = require("fs");
module.exports = {
  create: async (req, res) => {
    const { amount, currency } = req.body;
    let paymentIntent;
    // try {
    paymentIntent = await stripe.paymentIntents.create({
      // to do converstion of currency
      amount: amount,
      currency: currency,
      payment_method_types: ["card"],
      receipt_email: "surekha19.mca@gmail.com",
      description: "payment intent",
    });
    // } catch (e) {
    //   console.log("Error", e);
    // }

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  },

  confrimPayment: async (req, res) => {
    let status;
    const filename = `./Files/${req.body.id}.txt`;

    //Note : Path can be customized.. for now i have saved contents in folder : Files
    await files.appendFile(filename, JSON.stringify(req.body), function (err) {
      if (err) throw err;
      status = true;
      if (status) {
        res.send({
          status: "success",
          message: "Payment information has been saved successfully",
        });
      } else {
        res.send({
          status: "error",
          message: "There was error in saving details!",
        });
      }
    });

    // Not used because of Converting circular structure to JSON
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
