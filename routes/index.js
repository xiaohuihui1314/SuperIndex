var express = require('express');
var mongoose = require("mongoose");
require("../mongodb/users/users");
const User = mongoose.model("User");
const router = express.Router();
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();
const jwt = require('jsonwebtoken');
/* GET home page. */
router
    .get('/', function (req, res, next) {
        let content = {msg: "today  is  a  good  day"}; // 要生成token的主题信息
        let secretOrPrivateKey = "I am a goog man!" // 这是加密的key（密钥）
            let token = jwt.sign(content, secretOrPrivateKey, {
            expiresIn: 60 * 60 * 24  // 24小时过期
        });
        console.log("token ：" + token);
        res.render('index');

    })
    .get('/token', function (req, res, next) {
        let content = {msg: "today  is  a  good  day"}; // 要生成token的主题信息
        let secretOrPrivateKey = "I am a goog man!" // 这是加密的key（密钥）
        let token = jwt.sign(content, secretOrPrivateKey, {
            expiresIn: 60 * 60 * 24  // 24小时过期
        });
        console.log("token ：" + token);
        res.json({code:200});

    })
    .post('/login', multipartMiddleware, function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header("Access-Control-Allow-Headers", "x-requested-with,content-type");
        res.header("Content-Type", "application/json;charset=utf-8");
        console.log(req.body);
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
                    token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IlRlc3QgVXNlciJ9.J6n4-v0I85zk9MkxBHroZ9ZPZEES-IKeul9ozxYnoZ8",
                    role: docs.role,
                    userName: docs.userName
                };
                res.json(data);
            }

        });
    })
    .post("/register", function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header("Access-Control-Allow-Headers", "x-requested-with,content-type");
        res.header("Content-Type", "application/json;charset=utf-8");
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
