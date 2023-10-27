const express = require("express");
const app = express();
require("dotenv").config();

const port = 3000;
const connection = require("./user.connection");
require("./database").bootstrap(connection);

// CRUD operations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/", require("./user.routes"));


app.listen(port, () => {
  console.log(`Express API listening on port ${port}. http://localhost:${port}`);
});
