const users = require("./checkout");
module.exports = (app) => {
  // public route
  app.use("/checkout", users);

  app.get("/", function (req, res) {
    res.json({
      message: "Hello world! keep smilling",
    });
    res.send();
  });

  // express doesn't consider not found 404 as an error so we need to handle 404 explicitly
  // handle 404 error
  app.use(function (req, res, next) {
    let err = new Error("Not Found");
    err.status = 404;
    next(err);
  });

  app.get("/", function (req, res) {
    res.json({
      message: "Hello world! keep smilling",
    });
    res.send();
  });
};
