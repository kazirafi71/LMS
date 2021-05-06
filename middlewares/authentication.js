module.exports.adminAuthentication = (req, res, next) => {
    if(req.user.role!== "Admin"){
        return res.status(401).json({
            err:"Access Denied"
        })
    }
    next()
}
module.exports.studentAuthentication = (req, res, next) => {
    if(req.user.role!== "Student"){
        return res.status(401).json({
            err:"Access Denied"
        })
    }
    next()
}
module.exports.teacherAuthentication = (req, res, next) => {
    if(req.user.role!== "Teacher"){
        return res.status(401).json({
            err:"Access Denied"
        })
    }
    next()
}
