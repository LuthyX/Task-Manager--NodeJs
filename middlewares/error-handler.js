const { CustomAPIError } = require('../errors/custom-error')

const errorHandlerMiddleWare = (err, req, res, next)=>{
    console.log(err);
    if( err instanceof CustomAPIError ){
        return res.status(err.statusCode).json({msg : err.message})
    }
    return res.status(500).json({msg : "Soomething went Wrong, try again"});
}

module.exports = errorHandlerMiddleWare;