// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema({
//  items:[
//   {
//     name: String,
//     price: Number,
//   },
//  ],
//  total: Number,
// });

// module.exports = mongoose.model("Order", orderSchema);

const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({

  items: Array,

  total: Number

});

module.exports = mongoose.model("Order", OrderSchema);