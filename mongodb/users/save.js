var mongoose = require("mongoose");
require("./users");
var User = mongoose.model("User");
var user = new User({
    userList: {
        userName: "111",
        passWord: "111",
        role: 1
    }
});

user.save(function (err) {
    console.log("save status", err ? "failed" : "success");
});