require("../mongodb/users/users");
const express = require('express'),
    mongoose = require("mongoose"),
    User = mongoose.model("User"),
    router = express.Router(),
    multipart = require('connect-multiparty'),
    multipartMiddleware = multipart(),
    jwt = require('jsonwebtoken'),
    verifyToken = require('./token').verifyToken;

/* GET home page. */
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "x-requested-with,content-type,Authorization");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


router
    .get('/', function (req, res, next) {
        res.render('index');

    })
    .get('/token', verifyToken, function (req, res, next) {
        console.log("9999999");
        /*    let token = req.headers['authorization'];
         let decoded = jwt.verify(token, 'I am a good man!');
         /!* let decoded = jwt.verify(token, 'I am a good man!');*!/
         console.log(decoded);*/
        res.json({code: 200});

    })
    .post('/login', multipartMiddleware, function (req, res, next) {
        const userName = req.body.userName;
        const passWord = req.body.passWord;
        const cond = {
            $and: [
                {"userName": userName},
                {"passWord": passWord}
            ]
        };
        User.findOne(cond, function (err, docs) {
            if (err) {
                console.log("登录失败！");
                return;
            }
            if (docs) {
                let content = {
                    userName: docs.userName
                }; // 要生成token的主题信息
                let secretOrPrivateKey = "I am a good man!"; // 这是加密的key（密钥）
                let token = jwt.sign(content, secretOrPrivateKey, {
                    expiresIn: 30 * 10
                    // expiresIn: 60 * 60 * 24  // 24小时过期
                });
                console.log("token ：" + token);
                const data = {
                    token: token,
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
