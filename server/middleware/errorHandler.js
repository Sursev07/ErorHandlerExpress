module.exports = function(err, req, res, next){
    let statusCode = 500
    let message = "internal server error"
    let code = "UNKNOWN_ERROR"
    console.log(err)
    if(err.name == "Invalid ApiKey") {
        statusCode = 401
        message = "Key API is invalid"
    } else if(err.name == "SequelizeValidationError"){
        //console.log(err.errors[0].message)
        statusCode = 400
        code = "VALIDATION_ERROR"
        message = err.errors[0].message
    } else if(err.name == "DataNotFound"){
        statusCode = 404
        code = "DATA_NOT_FOUND"
        message = "Data Not Found"
    }

    res.status(statusCode).json({code, message})
}