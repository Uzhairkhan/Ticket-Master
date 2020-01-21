const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  customer: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Customer"
  },
  department: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Department"
  },
  employee: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Employee"
  },
  message: {
    type: String,
    required: true,
    minlength: 10
  },
  priority: {
    type: String,
    required: true,
    enum: ["High", "Medium", "Low"]
  },
  isResolved: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = {
  Ticket
};
