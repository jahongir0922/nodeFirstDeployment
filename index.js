const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = express.Router();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/config")();
require("./startup/prod")(app);
require("dotenv").config();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`I have been listened port number of ${port}...`);
});
app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
