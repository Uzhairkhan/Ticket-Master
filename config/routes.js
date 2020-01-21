const express = require("express");
const router = express.Router();
const usersController = require("../app/controllers/usersController");
const customerController = require("../app/controllers/customerController");
const departmentController = require("../app/controllers/departmentController");
const employeeController = require("../app/controllers/employeeController");
const { authenticateUser } = require("../app/middlewares/authenticate");

router.post("/users/register", usersController.register);
router.post("/users/login", usersController.login);
router.get("/users/account", authenticateUser, usersController.account);
router.delete("/users/logout", authenticateUser, usersController.logout);

router.get("/customers", customerController.list);
router.post("/customers", customerController.create);
router.get("/customers/:id", customerController.show);
router.put("/customers/:id", customerController.update);
router.delete("/customers/:id", customerController.delete);

router.get("/departments", departmentController.list);
router.post("/departments", departmentController.create);
router.get("/departments/:id", departmentController.show);
router.put("/departments/:id", departmentController.update);
router.delete("/departments/:id", departmentController.delete);

router.get("/employees", employeeController.list);
router.post("/employees", employeeController.create);
router.get("/employees/:id", employeeController.show);
router.put("/employees/:id", employeeController.update);
router.delete("/employees/:id", employeeController.delete);

module.exports = router;
