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
    .post("/register",multipartMiddleware,function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header("Access-Control-Allow-Headers", "x-requested-with,content-type");
        res.header("Content-Type", "application/json;charset=utf-8");

        let body="";
        req.on('data', function (data) {
            body += data;
        }).on('end', function () {
            console.log(JSON.parse(body))
        });





        res.json(body);
      /*  var userName = req.body.userName;
        var passWord = req.body.passWord;
        var user = new User({
            userName: userName,
            passWord: passWord,
            /!* createTime:new Date()*!/
        });
        console.log(new Date());
        user.save(function (err) {
            if (err) return next(err);
            return res.json(user);
        });*/

    });
module.exports = router;
