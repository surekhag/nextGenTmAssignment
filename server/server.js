const express = require("express");
const checkout = require("./routes/checkout");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
// app.set("secretKey", "nodeRestApi"); // jwt secret token

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

require("./routes")(app);

app.listen(3001, function () {
  console.log("Node server listening on port 3000");
});
