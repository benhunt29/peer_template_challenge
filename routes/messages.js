var memes = require('../models/images.json');
var messages = require('../models/messages.json');
var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

/* GET users listing. */
router.post('/', function(req, res, next) {
    var id = req.body.id;
    var message = req.body.message;
    var file = path.join(__dirname,'../models/messages.json');

    fs.readFile(file,'utf8',function(err,data){
        if (err){
            next(err);
        }else{
            var array = JSON.parse(data);
            var messages = array;
            messages.push({"messages":message,
            "id":id});
            messages = JSON.stringify(messages);

            fs.writeFile(file,messages,'utf8',function(err){
                if(err) {
                    return console.log(err);
                    next(err);
                }
                else{
                    console.log("Wrote Data!");
                }
            });
        }

    });

    //console.log(req.body);
    //var file1 = path.join(__dirname,'../models/images.json');
    //var file2 = path.join(__dirname,'../models/messages.json');
    //
    //var memesArray = [];
    //for (var i = 0;i<5;i++){
    //    memes[i].message = messages[i].message;
    //    console.log(memes[i].message, messages[i].message);
    //    memesArray[i] = memes[i];
    //}
    //
    //
    ////}
    //
    //console.log(memes);
    //res.render('memes.jade',{"memes": memesArray});
    res.send(id + " " + message);
});



module.exports = router;
