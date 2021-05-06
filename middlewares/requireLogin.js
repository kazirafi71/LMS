const User = require('../model/UserModel')
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const {SECRET_KEY}=require('../config/keys')

module.exports={
    requireLogin(req,res,next){
        let {authorization}=req.headers
        if(!authorization){
            return res.status(401).json({
                error:"You must be logged in"
            })
        }
        const token=authorization.split(' ')[1]
        
        jwt.verify(token,SECRET_KEY,(err,payload)=>{
            if(err){
                return res.status(401).json({
                    error:"You must be logged in"
                })
            }
            let {_id}=payload
            User.findById({_id})
            .then(userData=>{
                req.user=userData
                // console.log(req.user)
                next()
            })
        })
    }
}