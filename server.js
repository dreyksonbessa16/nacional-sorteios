const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

const routes = require("./routes");

require("./src/database");

app.use(cors());
app.use(morgan("dev"));

app.use(routes);

app.listen(process.env.PORT || 3000);