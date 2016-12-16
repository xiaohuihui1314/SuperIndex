var mongoose =require("mongoose");
require("./users");
var User=mongoose.model("User");
var user =new User({
    userName:"小辉辉",
    passWord:"123456",
    role:1
});

user.save(function (err) {
    console.log("save status",err?"failed":"success");
});