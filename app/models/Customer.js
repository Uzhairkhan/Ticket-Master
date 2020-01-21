const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5
  },
  mobile: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function(value) {
        return validator.isEmail(value);
      },
      message: function() {
        return "Invalid Email Format";
      }
    }
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = {
  Customer
};
