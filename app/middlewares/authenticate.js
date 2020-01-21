const { User } = require("../models/User");

const authenticateUser = (req, res, next) => {
  //get the token from the header
  const token = req.header("x-auth");

  User.findByToken(token)
    .then((user) => {
      if (user) {
        req.user = user;
        req.token = token;
        next();
      } else {
        res.status("401").send("token not available");
      }
    })
    .catch((err) => {
      res.status("401").send(err);
    });
};

module.exports = {
  authenticateUser
};
