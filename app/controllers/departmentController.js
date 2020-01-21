const { Department } = require("../models/Department");
const { Employee } = require("../models/employee");

module.exports.list = (req, res) => {
  Department.find()
    .then((department) => {
      res.json(department);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.show = (req, res) => {
  const id = req.params.id;

  //to list all the employees belonging to a particular department
  Promise.all([
    Department.findById(id).select("name"),
    Employee.find({ department: id }).select("name mobile email")
  ])
    .then((values) => {
      const [department, employee] = values;
      const departmentObj = department.toObject();
      departmentObj.employee = employee;
      res.json(departmentObj);
    })
    .catch((err) => {
      res.json(err);
    });

  //   Department.findById(id)
  //     .then((department) => {
  //       if (department) {
  //         Employee.find({ department: department._id }).then((employee) => {
  //           const departmentObj = department.toObject();
  //           departmentObj.employee = employee;
  //           res.json(departmentObj);
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       res.send(err);
  //     });
};

module.exports.create = (req, res) => {
  const body = req.body;
  const department = new Department(body);

  department
    .save()
    .then((dep) => {
      res.json(dep);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.update = (req, res) => {
  const id = req.params.id;
  const body = req.body;

  Department.findOneAndUpdate({ _id: id }, body, {
    new: true,
    runValidators: true
  })
    .then((dep) => {
      res.json(dep);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports.delete = (req, res) => {
  const id = req.params.id;

  Department.findOneAndDelete({ _id: id })
    .then((dep) => {
      res.json(dep);
    })
    .catch((err) => {
      res.send(err);
    });
};
