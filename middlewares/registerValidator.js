const { body, validationResult } = require("express-validator");

module.exports = [
  body("userName")
    .not()
    .isEmpty()
    .withMessage("Username required")
    .isLength({ min: 3 })
    .withMessage("User name must be at least 3 characters"),

  body("email")
    .not()
    .isEmpty()
    .withMessage("Email required")
    .normalizeEmail()
    .isEmail()
    .withMessage("Invalid Email address")
    ,

  body("password").not().notEmpty().withMessage("Password required")
  .not().isIn(['123','password'])
  .withMessage('Do not use a common word as the password')
  .isLength({min:6})
  .withMessage('Password must be at least 6 characters'),
  
  body('confirmPassword').not().notEmpty().withMessage("Confirm Password required")
  .custom((cPass,{req})=>{
      if(cPass !== req.body.password){
        throw new Error('Confirm Password does not match ');
      }
      return true
  })

]


module.exports.register_validator=(req,res,next)=>{
    const errors = validationResult(req).formatWith(errors=>errors.msg)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.mapped() });
        
      }
      next();
}
