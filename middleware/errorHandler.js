const errorHandler = (error, req, res, next) =>{
    console.log(error);
    logger.error(error.message)
    return res.status(400).send(error.message);
}

module.exports = errorHandler;