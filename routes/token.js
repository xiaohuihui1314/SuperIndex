const client = require('./redis').client,
    TOKEN_EXPIRATION = 20;
exports.expireToken = function (req, res, next) {
    let token = req.headers['authorization'];
    if (token != null) {
        if (token != null) {
            client.set(token, {is_expired: true});
            client.expire(token, TOKEN_EXPIRATION);
        }
    }
    next();
};
exports.loginSetToken = function (content) {
    let token = "5a4sd4a6sdasdasdasd";
    client.hmset(token, content);
    client.expire(token, TOKEN_EXPIRATION);
    return token;
};
exports.verifyToken = function (req, res, next) {
    let token = req.headers['authorization'];
    client.hgetall(token, function (err, reply) {
        if (err) {
            console.log("err " + err);
        } else if (reply) {
            client.expire(token, TOKEN_EXPIRATION);
            next();
        }else {
            console.log("token已过期！");
        }
    });
};