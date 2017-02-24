const redis = require("redis"),
    redisClient = redis.createClient();
redisClient.on("error", function (err) {
    console.log("Error " + err);
});
redisClient.on('connect', function () {
    console.log('Redis is ready');
});

exports.redis = redis;
exports.redisClient = redisClient;