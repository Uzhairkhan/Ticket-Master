const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true,
    minlength: 10
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
  department: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Department" // have to pass the model name if the type is Schema.Types.ObjectId
  }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = {
  Employee
};
