const express = require("express");
const router = express.Router();

const userController = require("../app/api/controllers/Checkout");
// router.get("/test", userController.create);
router.post("/create-payment-intent", userController.create);
router.post("/confirm-payment", userController.confrimPayment);

// );

module.exports = router;
