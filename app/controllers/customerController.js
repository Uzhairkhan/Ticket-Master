const { Customer } = require("../models/Customer");

module.exports.list = (req, res) => {
  Customer.find().then((customers) => {
    res.json(customers);
  });
};

module.exports.create = (req, res) => {
  const body = req.body;

  const customer = new Customer(body);
  customer
    .save()
    .then((customer) => {
      res.json(customer);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;

  Customer.findOne({ _id: id })
    .then((customer) => {
      res.json(customer);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;

  Customer.findOneAndUpdate({ _id: id }, body, {
    new: true,
    runValidators: true
  })
    .then((customer) => {
      res.json(customer);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.delete = (req, res) => {
  const _id = req.params.id;

  Customer.findOneAndDelete({ _id })
    .then((customer) => {
      res.json(customer);
    })
    .catch((err) => {
      res.send(err);
    });
};
