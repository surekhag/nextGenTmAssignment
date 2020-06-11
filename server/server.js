const express = require("express");
const checkout = require("./routes/checkout");
const bodyParser = require("body-parser");
const stripe = require("stripe")(
  "sk_test_51GsQPNDTOzzcNN3IsPKoXWp3Bg0uoTJSOjQTlaJn4usu8Hrri6AFL8ZIOTa5uGvgyeqR3rM7tubwKGzVgzLd6X6Z00voU5hGpx"
);

const app = express();
// app.set("secretKey", "nodeRestApi"); // jwt secret token

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

require("./routes")(app);

app.listen(3001, function () {
  console.log("Node server listening on port 3000");
});
