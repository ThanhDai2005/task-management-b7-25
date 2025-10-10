const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const database = require("./config/database");
require("dotenv").config();

const routerApiVer1 = require("./api/v1/routes/index.route");

const app = express();
const port = process.env.PORT;

app.use(cors());

database.connect();

app.use(cookieParser());

// parse application/json
app.use(bodyParser.json());

// Routes Version 1
routerApiVer1(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
