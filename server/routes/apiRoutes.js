var express = require('express');
var router = express.Router();
var Puppy = require('../models/puppies')
var logic = require('../logic/logic')

var tempPuppyArray = Puppy.tempPuppyArray;

router.get('/puppies', function(req, res, next){
  res.json(tempPuppyArray);
});

router.get('/puppy/:id', function(req, res, next){
  var pupByID = logic.seePuppy(req.params);
  res.json(pupByID);
});

router.post('/puppies', function(req, res, next){
  var newPuppy = logic.addPuppy(req.params, req.body)
  res.json(newPuppy);
});

router.put('/puppy/:id', function(req, res, next) {
  var updatedPuppy = logic.updatePuppy(req.params, req.body)
  res.json(updatedPuppy);
});


router.delete('/puppy/:id', function(req, res, next) {
 var gonePup = logic.deletePuppy(req.params, req.body);
 res.json(gonePup);
});


module.exports = router;
