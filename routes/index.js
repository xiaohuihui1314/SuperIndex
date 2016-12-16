var express = require('express');
var mongoose = require("mongoose");
require("../mongodb/users/users");
var User = mongoose.model("User");
var router = express.Router();

/* GET home page. */
router
    .get('/', function (req, res, next) {
        res.render('index');
    })
    .post('/login', function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "POST");
        res.header("Access-Control-Allow-Headers", "x-requested-with,content-type");
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
                console.log(docs);
                res.json(docs);
            }

        });
    })
    .post("/register", function (req, res, next) {

        var userName = req.body.userName;
        var passWord = req.body.passWord;
        var user = new User({
            userName: userName,
            passWord: passWord,
            /* createTime:new Date()*/
        });
        console.log(new Date());
        user.save(function (err) {
            if (err) return next(err);
            return res.json(user);
        });

    });
module.exports = router;
