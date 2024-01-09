const errorHandler=(err,req,res,next)=> {
    const statusCode = res.statusCode? res.statusCode :500 // if there is anystatuscode then we will use it otherwise we will pass 500 
    res.status(statusCode)
    res.json({
        message:err.message,
        stack: process.env.NODE_ENV==="development" ? err.stack:null  // will show the location of error  ...  //if it is in development then only it will show path otherwise not
    })
}

module.exports =errorHandler