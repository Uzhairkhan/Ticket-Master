const { Employee } = require("../models/employee");

module.exports.list = (req, res) => {
  Employee.find()
    .populate("department", ["name"])
    .select("name mobile email")
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;

  Employee.findById(id)
    .populate("department", ["name"])
    .select("name mobile email")
    .then((employee) => {
      res.json(employee);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const employee = new Employee(body);

  employee
    .save()
    .then((emp) => {
      res.json(emp);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;

  Employee.findOneAndUpdate({ _id: id }, body, {
    new: true,
    runValidators: true
  })
    .then((emp) => {
      res.json(emp);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.delete = (req, res) => {
  const id = req.params.id;

  Employee.findOneAndDelete({ _id: id })
    .then((emp) => {
      res.json(emp);
    })
    .catch((err) => {
      res.send(err);
    });
};
