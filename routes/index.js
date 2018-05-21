var fs = require('fs');
var path = require('path');

var express = require('express');
var router = express.Router();

var restaurants = [];

LoadResources();

function LoadResources(){
  var filename = path.join(__dirname, "../resources/restaurants.json"); 
  fs.readFile(filename, {encoding: 'utf-8'}, function(err, data){
    if(!err){
      var jData = JSON.parse(data);

      restaurants = GetRestaurantsArr(jData);

    }
    else{
      console.log("error reading file: " + filename);
    }
  });
}

function GetRestaurantsArr(restaurantJson) {
  var arr = [];

  for(i in restaurantJson) {
    var strName = i;
    var restData = restaurantJson[i];
    var strMenu = restData['menu-url'];
    //var strUrl = restData['url'];

    arr.push({"name": strName, "menu-url": strMenu});
  }

  return arr;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/lunch', function(req, res, next) {
  res.render('lunchSelect', { title: 'Express' , places:restaurants});
});

router.post('/lunch/vote', function(req, res, next) {
  res.send("good job");
});

module.exports = router;