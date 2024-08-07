const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/customer", proxy("https://shopping-customer-ey6j.onrender.com"));
app.use("/shopping", proxy("https://shopping-shopping.onrender.com"));
app.use("/", proxy("https://shopping-products.onrender.com")); // products

app.listen(8000, () => {
  console.log("Gateway is Listening to Port 8000");
});
