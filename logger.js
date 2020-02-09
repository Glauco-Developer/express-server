function log(req, res, next){
    console.log('b');
    next()
}
module.exports = log;