const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const User = require("./Models/UserModel");
const routes = require("./Routes/index");
const bodyParser = require("body-parser");
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.use(bodyParser.json());
routes(app);

const mongoHTTP = process.env.MongoDB;

mongoose
  .connect(mongoHTTP, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDb connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.listen(port, (req, res) => {
  console.log("server is running on port " + port);
});
