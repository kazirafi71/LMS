module.exports=(error,res,errorMsg)=>{
   
    console.log(error)
    return res.status(401).json({
        err: errorMsg
      });
      

}