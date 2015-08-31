var memes = require('../models/images.json');
var messages = require('../models/messages.json');
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET users listing. */
router.get('/:id?', function(req, res, next) {
  var id = req.params.id;
  var file1 = path.join(__dirname,'../models/images.json');
  var file2 = path.join(__dirname,'../models/messages.json');

/*
    if(err){
      next(err);
    }else{
*/
      //var arrayMemes = JSON.parse(images);
      //var arrayMessages = JSON.parse(messages);
      var memesArray = [];
      for (var i = 0;i<5;i++){
        memes[i].message = messages[i].message;
        console.log(memes[i].message, messages[i].message);
        memesArray[i] = memes[i];
      }


    //}

    console.log(memes);
    res.render('memes.jade',{"memes": memesArray});
  });



module.exports = router;
