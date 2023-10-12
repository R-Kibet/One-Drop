const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;
console.log(process.env.MONGODB_URL);
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("database connected"));

//schema
//user
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

//product
const productSchema = mongoose.Schema({
  name: String,
  category: String,
  image: String,
  price: Number,
  description: String,
});

//model
//user model
const userModel = mongoose.model("user", userSchema);

// product model
const productModel = mongoose.model("product", productSchema);

//API
//Home
app.get("/", (req, res) => res.send("server is running"));

//sign Up
app.post("/signup", (req, res) => {
  console.log(req.body);
  const { email } = req.body;

  userModel.findOne({ email: email }).then((result) => {
    console.log(result);

    if (result) {
      res.send({ message: "Email is already registered", alert: false });
    } else {
      const data = userModel(req.body);
      const save = data.save();
      res.send({ message: "successflly registered", alert: true });
    }
  });
});

//Login
app.post("/login", (req, res) => {
  console.log(req.body);
  //check if email is indb
  const { email } = req.body;

  userModel.findOne({ email: email }).then((result) => {
    if (result) {
      const dataset = {
        _id: result._id,
        firstName: result.firstname,
        lastName: result.lastName,
        email: result.email,
        image: result.image,
      };
      res.send({ message: "Login successfull", alert: true, data: dataset });
    } else {
      res.send({ message: "user not registeres", alert: false });
    }
  });
});

//Product
app.post("/uploadProduct", async (req, res) => {
  console.log(req.body);

  const data = productModel(req.body);
  const save = await data.save();
  res.send({ message: "upload successfull" });
});

//fetch all products from database
app.get("/product", async (req, res) => {
  const data =  await productModel.find({})
  res.send(JSON.stringify(data))
})

app.listen(PORT, () => console.log(`server is running at port: ${PORT}`));
