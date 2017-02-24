const redis = require("redis"),
    client = redis.createClient();
client.on("error", function (err) {
    console.log("Error " + err);
});
client.on('connect', function () {
    console.log('Redis is ready');
});

exports.redis = redis;
exports.client = client;