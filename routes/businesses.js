var express = require('express');
var router = express.Router();
var Business = require('../models/business.js');


router.get('/', function(req, res) {
  Business.find({}, "lat lon", function(err, response) {
    res.json(response);
  });
});

router.get('/:query', function(req, res) {
  var query = req.params.query;
  console.log("This is the query ", query);
  Business.find({'category': query}, "lat lon", function(err, response) {
    console.log("This is the response ", response);
    res.json({'businesses': response});
  });
});

router.get('/tags/taco', function(req, res) {
  var tags = req.query.tags;
  console.log('tags', tags);
  Business.find({'tags': {$in: tags}}, function(err, response){
    console.log(response);
    res.json({'businesses': response});
  });
});

module.exports = router;
//
