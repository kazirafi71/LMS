const UserModel = require("../model/UserModel");
const bcrypt = require("bcryptjs");
const controllerError = require("../utils/controllerError");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config/keys");

module.exports.register__controller = async (req, res, next) => {
  try {
    const { userName, email, password, confirmPassword } = req.body;

    const userInfo = await UserModel.findOne({ email });
   
    if (userInfo) {
      
      return res.status(401).json({
        errors: {user: "User already exists"} ,
      });
    }
    const hash = await bcrypt.hash(password, 10);
    const user = new UserModel({
      userName,
      email,
      password: hash,
    });

    user
      .save()
      .then((userData) => {
        res.status(201).json({
          userData,
        });
      })
      .catch((err) => {
        controllerError(err, res, "Error occurred");
      });
  } catch (error) {
    controllerError(error, res, "Error occurred");
  }
};

module.exports.login__controller = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userInfo = await UserModel.findOne({ email });

    if (!userInfo) {
      controllerError((error = null), res, "User not exists");
    }

    // console.log(userInfo)
    bcrypt
      .compare(password, userInfo.password)
      .then((result) => {
        if (!result) {
          controllerError(err, res, "Password not matched");
        }
        const token = jwt.sign({ _id: userInfo._id }, SECRET_KEY);
        return res.status(200).json({
          text: "Login successful",
          token,
        });
      })
      .catch((err) => {
        controllerError(err, res, "Error occurred");
      });
  } catch (error) {
    controllerError(error, res, "Error occurred");
  }
};
