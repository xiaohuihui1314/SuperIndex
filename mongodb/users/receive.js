var mongoose =require("mongoose");
require("./users");
var User=mongoose.model("User");


User.find({},function (err,docs) {
    if(err){
        return;
    }
    if (docs){
        console.log("success！");
        console.log(docs);

    }
});