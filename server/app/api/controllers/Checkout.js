const stripe = require("stripe")(
  "sk_test_51GsQPNDTOzzcNN3IsPKoXWp3Bg0uoTJSOjQTlaJn4usu8Hrri6AFL8ZIOTa5uGvgyeqR3rM7tubwKGzVgzLd6X6Z00voU5hGpx"
);
module.exports = {
  create: async (req, res) => {
    //   const { items } = req.body;
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      // amount: calculateOrderAmount(items),
      amount: 100,
      currency: "usd",
      payment_method_types: ["card"],
      receipt_email: "surekha19.mca@gmail.com",
    });
    console.log(paymentIntent);
    res.send({
      // test: "test",
      clientSecret: paymentIntent.client_secret,
    });
  },
};
