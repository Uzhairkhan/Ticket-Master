const mongoose = require("mongoose");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 128
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(value) {
        return validator.isEmail(value);
      },
      message: function() {
        return "Invalid Email Format";
      }
    }
  },
  tokens: [
    {
      token: {
        type: String
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

//model used in development  skinny controllers and fat models
//prehooks
//use es5 function for "this" to work
userSchema.pre("save", function(next) {
  const user = this;
  if (user.isNew) {
    bcryptjs.genSalt(10).then((salt) => {
      bcryptjs.hash(user.password, salt).then((encryptedPassword) => {
        user.password = encryptedPassword;
        next();
      });
    });
  } else {
    next();
  }
});

//own static method
userSchema.statics.findByCredentials = function(email, password) {
  const User = this;
  //if email field is empty
  if (!email) {
    return Promise.reject({ error: "email field cannot be empty" });
  } else {
    //if email field is not empty find user in the DB whose email matches the entered email
    return User.findOne({ email })
      .then((user) => {
        if (!user) {
          return Promise.reject("invalid email/password");
        }
        //if email is correct perforn the below operation
        //compare the incomming password with the DB users password
        return bcryptjs.compare(password, user.password).then((result) => {
          if (result) {
            return Promise.resolve(user);
          } else {
            return Promise.reject("invalid email/password");
          }
        });
      })
      .catch();
  }
};

//own instance method
userSchema.methods.generateToken = function() {
  const user = this;
  const tokenData = {
    _id: user._id,
    username: user.username,
    createdAt: Number(new Date())
  };

  const token = jwt.sign(tokenData, "shera_.786");

  user.tokens.push({
    token
  });

  return user
    .save()
    .then((user) => {
      return Promise.resolve(token);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

userSchema.statics.findByToken = function(token) {
  const User = this;
  let tokenData;
  try {
    tokenData = jwt.verify(token, "shera_.786");
  } catch (err) {
    return Promise.reject(err);
  }
  return User.findOne({
    _id: tokenData._id,
    "tokens.token": token
  });
};

const User = mongoose.model("User", userSchema);

module.exports = {
  User
};
