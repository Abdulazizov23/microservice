const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());


const Product = require("./models/product");
const url = process.env.MONGO_URL || "mongodb://mongo:27017/products";

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established with product");
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.get("/", (req, res) => {
  res.send("This is products service");
});

app.post("/product", (req, res) => {
  const product = new Product(req.body);
  product
    .save()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/products", (req, res) => {
  Product.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.get("/product/:id", (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      if (product) {
        res.status(200).send(product);
      } else {
        res.status(404).send("No such product found");
      }
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

app.delete("/product/:id", (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((product) => {
      if (product) {
        res.status(200).send(product);
      } else {
        res.status(404).send("No product found");
      }
    })
    .catch((err) => res.status(400).send(err));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening: http://localhost:${port}`);
  console.log("Up and running products service");
});
