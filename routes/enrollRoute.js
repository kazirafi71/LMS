const router=require('express').Router()

const { enroll__course__controller } = require('../controllers/enrollController')
const {requireLogin}=require('../middlewares/requireLogin')


router.put('/',requireLogin,enroll__course__controller)

module.exports=router