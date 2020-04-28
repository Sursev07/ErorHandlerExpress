module.exports = function(err, req, res, next){
    let statusCode = 500
    let message = "internal server error"
    if(err.name == "Invalid ApiKey") {
        statusCode = 401
        message = "Key API is invalid"
    } else if(err.name == "SequelizeValidationError"){
        //console.log(err.errors[0].message)
        statusCode = 400
        message = err.errors[0].message
    } else if(err.name == "DataNotFound"){
        statusCode = 404
        message = err.message
    }

    res.status(statusCode).json({message})
}