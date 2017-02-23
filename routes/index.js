var express = require('express');
var mongoose = require("mongoose");
require("../mongodb/users/users");
const User = mongoose.model("User");
const router = express.Router();
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const jwt = require('jsonwebtoken');
var redis = require("redis"),
    client = redis.createClient();

// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

client.on("error", function (err) {
    console.log("Error " + err);
});

client.set("string key", "string val", redis.print);
client.hset("hash key", "hashtest 1", "some value", redis.print);
client.hset(["hash key", "hashtest 2", "some other value"], redis.print);
client.hkeys("hash key", function (err, replies) {
    console.log(replies.length + " replies:");
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    client.quit();
});
/* GET home page. */
router.use( function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "x-requested-with,content-type,authorization");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

router
    .get('/', function (req, res, next) {
        res.render('index');

    })
    .get('/token', function (req, res, next) {
        let token = req.headers['authorization'];
        console.log(token);
        let decoded = jwt.verify(token, 'I am a goog man!');
        console.log(decoded);
        console.log("token ：" + token);
        res.json({code:200});

    })
    .post('/login', multipartMiddleware, function (req, res, next) {

        let content = {msg: "today  is  a  good  day"}; // 要生成token的主题信息
        let secretOrPrivateKey = "I am a goog man!"; // 这是加密的key（密钥）
        let token = jwt.sign(content, secretOrPrivateKey, {
              expiresIn: 60
            // expiresIn: 60 * 60 * 24  // 24小时过期
        });
        console.log("token ：" + token);
        const userName = req.body.userName;
        const passWord = req.body.passWord;
        const cond = {
            $and: [
                {"userName": userName},
                {"passWord": passWord}
            ]
        };
        User.findOne(cond, function (err, docs) {
            console.log(docs);
            if (err) {
                console.log(err);
                return;
            }
            if (docs) {
                console.log("success!");
                console.log(docs);
                console.log(docs.userName);
                const data = {
                    token:token,
                    role: docs.role,
                    userName: docs.userName
                };
                res.json(data);
            }

        });
    })
    .post("/register", function (req, res, next) {
        let userName = req.body.userName;
        let passWord = req.body.passWord;
        console.log(req.body);
        let user = new User({
            userName: userName,
            passWord: passWord,
            /* createTime:new Date()*/
        });
        user.save(function (err, docs) {
            if (err) {
                let err = {
                    state: -1,
                    error: "用户名重复"
                };
                return res.json(err);
            } else if (docs) {
                return res.json(user);
            }

        });
    });
module.exports = router;
