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
    var comment = req.body.comment;
    var file = path.join(__dirname, '../models/messages.json');

    fs.readFile(file, 'utf8', function (err, data) {
        if (err) {
            next(err);
        } else {
            var array = JSON.parse(data);
            var messagesArray = array;


            messagesArray.push({
                "comment": comment,
                "id": id
            });
            messagesArray = JSON.stringify(messagesArray);


            fs.writeFile(file, messagesArray, 'utf8', function (err) {
                if (err) {
                    return console.log(err);
                    next(err);
                }
                else {
                    console.log("Wrote Data!");
                    console.log(id,comment);
                    res.json(id + " " + comment);
                }
            });
        }

    });
});

router.get('/:id?', function(req, res, next) {
    var id = req.params.id;
    var file = path.join(__dirname,'../models/messages.json');

    fs.readFile(file,'utf8',function(err,data){
        if (err){
            next(err);
        }else{
            var array = [];
            var messagesArray = JSON.parse(data);
            //console.log(messagesArray);

            messagesArray.forEach(function(elem){
                if(elem.id == id && elem.comment){
                    array.push(elem);
                }
            });

            res.send(array);
        }

    });

});



module.exports = router;
