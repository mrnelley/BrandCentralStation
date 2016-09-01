var mongoose = require("mongoose");
module.exports = mongoose.model('Message', {
    user   : String,
    userId : String,
    userimg: String,
    content: String,
    date   : {type   : Date,
              default: Date.now}
})
