var mongoose = require("mongoose")
    , Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/user');
var User = new Schema({
    userName: {
        unique: true,//唯一键
        type: String//用户名
    },
    passWord: String,//密码
    disable: false,
    autograph: String,//个性签名
    minuteList: {
        address: String,//地址
        phone: String,//电话
        Email: String,//邮箱
    },
    role: String,//权限
    createTime: {
        type: Date,//创建时间
        default: Date.now
    }

});
// 创建一个集合。
var UserId_Adds = new Schema({
    _id: String,
    test: {
        type: Boolean,
        default: false
    },
    userId: {
        type: Number,
        default: 1000
    },
});
// 在这将暴露模型的集合的模式创建。
User.statics.findAndModify = function (query, sort, doc, callback, options) {
    return this.collection.findAndModify(query, sort, doc, callback, options);
};
// 创建你的模型。
var UserId_Add = mongoose.model('User', User);
User.pre("save", true, function (err, next, callback) {
   /* console.log(err)
    var _this = this;
    var _this_userId = null;
    UserId_Add.findAndModify(
        {
            userValue: "userValue"
        },
        [],
        {
            $inc: {
                userId: 1
            }
        },
        {"new": true, upsert: true}, function (err, result) {
            console.log(result)
            if (err) {
                callback(err);
            }
            else {
                _this_userId = result.value.userId + 1000;
                _this.userId = _this_userId;

            }
        });*/
    next();
});

mongoose.model("User", User);