const client = require('./redis').client,
    jwt = require('jsonwebtoken'),
    TOKEN_EXPIRATION = 60;
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
exports.verifyToken = function (req, res, next) {
    let token = req.headers['authorization'];
    let decoded = jwt.verify(token, 'I am a good man!');
    console.log(decoded);
    client.get(token, function (err, reply) {
        if (err) {
            console.log("err" + err);
            return res.send(500);
        } else if (reply) {
            console.log("reply" + reply);
            next();
        }
    });
};