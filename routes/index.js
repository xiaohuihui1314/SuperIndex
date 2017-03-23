require("../mongodb/users/users");
const express = require('express'),
    mongoose = require("mongoose"),
    User = mongoose.model("User"),
    router = express.Router(),
    token = require("./token");

/* GET home page. */
/*router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "x-requested-with,content-type,Authorization");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});*/
router
    .get('/', function (req, res, next) {
        res.render('index');
    })
    .get('/token', token.verifyToken, function (req, res, next) {
        res.json({code: 200});
    })
    .post('/login', function (req, res, next) {
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
                };
                const data = {
                    token: token.loginSetToken(content),
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
