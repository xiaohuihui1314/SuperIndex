var express = require('express');
var mongoose = require("mongoose");
require("../mongodb/users/users");
var User = mongoose.model("User");
var router = express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
/* GET home page. */
router
    .get('/', function (req, res, next) {
        res.render('index');
    })
    .post('/login', multipartMiddleware, function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header("Access-Control-Allow-Headers", "x-requested-with,content-type");
        res.header("Content-Type", "application/json;charset=utf-8");
        console.log(req.body);
        var userName = req.body.userName;
        var passWord = req.body.passWord;
        var cond = {
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
                var data = {
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
