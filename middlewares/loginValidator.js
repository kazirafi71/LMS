const { body, validationResult } = require("express-validator");

module.exports = [
  body("email")
    .not()
    .isEmpty()
    .withMessage("Email required")
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid Email address"),
  body("password")
    .not()
    .notEmpty()
    .withMessage("Password required")
    .not()
    .isIn(["123", "password"])
    .withMessage("Do not use a common word as the password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

module.exports.login_validator = (req, res, next) => {
  const errors = validationResult(req).formatWith((errors) => errors.msg);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.mapped() });
  }
  next();
};
