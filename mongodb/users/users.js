var mongoose=require("mongoose")
    ,Schema=mongoose.Schema;
mongoose.connect('mongodb://localhost/user');
var User=new Schema({
    userName:{
        unique: true,//唯一键
        type:String
    },
    passWord:String,
    role:String,
    createTime:{
        type:Date,
        default:Date.now
    }
});

mongoose.model("User", User);