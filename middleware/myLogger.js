var myLogger = function (req, res, next) {
    console.log('This is custom logger');
    next();
}

module.exports = myLogger;