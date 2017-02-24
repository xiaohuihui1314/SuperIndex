const redisClient = require('./redis').redisClient,
    TOKEN_EXPIRATION = 60;
exports.expireToken  = function (req, res, next) {
    let token = req.headers['authorization'];
    if(token!=null){
        if (token != null) {
            redisClient.set(token, { is_expired: true });
            redisClient.expire(token, TOKEN_EXPIRATION);
        }
    }
    next();
};
exports.verifyToken = function (req, res, next) {
    let token = req.headers['authorization'];
    redisClient.get(token, function (err, reply) {
        if (err) {
            console.log("err"+err);
            return res.send(500);
        }else if (reply) {
            console.log("reply"+reply);
            res.send(401);
        }else {
            next();
        }
    });
};