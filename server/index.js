const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const Menu = require("./models/Menu");
const Order = require("./models/Order");
const Contact = require("./models/Contact");
const User = require("./models/Users");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


app.post("/menu", async (req, res) => {
  try {
    const data = await Menu.insertMany(req.body);
    res.json(data
    );
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/register", async (req, res) => {
  try {

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    await newUser.save();

    res.json({
      success: true,
      message: "Register Successful"
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message
    });

  }
});

app.post("/login", async (req,res) =>{
  const{ email, password } = req.body;

  const user = await User.findOne({
    email,
    password,
  });

  if (user) {
    res.json({
      success: true,
      user,
    });
  }else {
    res.json({
      success: false,
      message: "Invalid email & password",
    });
  }
});

app.use(express.json());

app.post("/orders", async(req,res)=>{

 const order = new Order({
   items: req.body.items,
   total: req.body.total
 });

 await order.save();

 res.json(order);

});

app.delete("/orders/:id", async (req,res) =>{
  try{
    await Order.findByIdAndDelete(req.params.id);
    res.json({ message: "Order deleted"});
  } catch (err) {
    res.status(500).json({message: err.message});
  }
});

app.get("/contact", async (req, res) => {
  try {
    const data = await Contact.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/contact", async(req,res)=>{
  try{
    const contact = new Contact(req.body);
     await contact.save();
     
     res.json({
      message: "Message Stored successfully!",
     });
  }catch (err){
    console.log(err);
    res.status(500).json({
      message:"Error"
    });
  }
});

app.get("/menu", async (req, res) => {
  const data = await Menu.find();
  res.json(data);
});


app.delete("/menu/:id", async (req,res) =>{
    await Menu.findByIdAndDelete(req.params.id);
    res.json({message:"Deleted"});
});

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

app.post("/create-order", async(req,res) => {
  try{

    console.log(req.body);

    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: "restaurant_order",
    };

    const order = await razorpay.orders.create(options);

    console.log(order);

    res.json(order);

  }catch(error){

    console.log("Razorpay Error:", error);

    res.status(500).json({
       message: error.message
    });
  }
});

app.listen(5000, () => {
  console.log("server Run");
});



