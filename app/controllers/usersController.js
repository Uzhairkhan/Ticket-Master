const { User } = require("../models/User");
//lodash allows us to send particular information after save or other methods
const _ = require("lodash");

module.exports.register = (req, res) => {
  const body = req.body;

  const user = new User(body);
  user
    .save()
    .then(function(user) {
      res.json(_.pick(user, ["_id", "username", "email"]));
    })
    .catch(function(err) {
      res.send(err);
    });
};

module.exports.login = (req, res) => {
  const body = req.body;

  User.findByCredentials(body.email, body.password)
    .then((user) => {
      return user.generateToken();
    })
    .then((token) => {
      //creating own custom header
      res.json({ token: token });
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports.account = (req, res) => {
  const { user } = req;
  res.send(_.pick(user, ["_id", "username", "email"]));
};

module.exports.logout = (req, res) => {
  const { user, token } = req;
  User.findByIdAndUpdate(user._id, { $pull: { tokens: { token } } })
    .then(() => {
      res.send({ notice: "succesfully logged out" });
    })
    .catch((err) => {
      res.send(err);
    });
};
