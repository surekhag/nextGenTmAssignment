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
  },
};
