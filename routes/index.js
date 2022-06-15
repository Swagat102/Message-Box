var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
const { restart } = require('nodemon');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', function (req,res){
  var x = req.body.messenger;
  var y = req.body.message;
  var z = `Sent by: ${x}
  message:${y}`
  fs.writeFile(path.join(__dirname,'../pathpath.txt'),z,function(err){
    if (err){
      console.log(err);
      return;
    }
res.render('submitted')
  })
})

module.exports = router;
