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
exports.loginSetToken = function (content) {
    let secretOrPrivateKey = 'I am a good man!';
    let token = jwt.sign(content, secretOrPrivateKey, {
        expiresIn: 300
        // expiresIn: 60 * 60 * 24  // 24小时过期
    });
    client.set(token, content.userName);
    client.get(token,function (err, reply) {
        console.log("err "+err);
        console.log("reply "+reply);
    });
    return token;
};
exports.verifyToken = function (req, res, next) {
    let token = req.headers['authorization'];
    let decoded = jwt.verify(token, 'I am a good man!', function (err, decoded) {
        if (err) {
            console.log(err.name);
            console.log(err.message);
            console.log(err.expiredAt);
            res.sendStatus(500);
        }else {
            console.log("decoded"+decoded);
            next();
        }
    });
};