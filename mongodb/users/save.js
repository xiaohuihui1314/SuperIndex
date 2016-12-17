var mongoose =require("mongoose");
require("./users");
var User=mongoose.model("User");
var user =new User({
    userName:"222",
    passWord:"222",
    role:1
});

user.save(function (err) {
    console.log("save status",err?"failed":"success");
});