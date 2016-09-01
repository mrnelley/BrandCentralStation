var Message = require('../data/messages')

module.exports.postMessage = function(req, res){
      // console.log(req.body);
      var message = new Message(req.body);
      message.save();

      Message.find({}, function(err, allMessages){
        if (err){
          res.error(error);
        }
        else{
          res.json(allMessages);
        }
      })
}
