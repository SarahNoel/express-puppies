var Puppy = require('../models/puppies')


var tempPuppyArray = Puppy.tempPuppyArray

//filters puppy by ID
function pupFilter(params){
  return tempPuppyArray.filter(function(puppy){
    return puppy.pupID === +params.id;
  })
}


// see puppy by id
function seePuppy(params){
  var pup = pupFilter(params);
  if (pup.length > 0){
    return{puppy:pup[0]}
  } else {
    return
      {message: "Puppy doesn't exist."};
  }
}

//add puppy
function addPuppy(params, body){
  for (var i = 0; i < tempPuppyArray.length; i++) {
      console.log(tempPuppyArray[i].pupID === +body.pupID)
    if(tempPuppyArray[i].pupID === +body.pupID){
      return {message: "That ID is already in use."};
    }
  }
  var newPostPuppy = new Puppy.Puppy(+body.pupID, body.pupName, +body.pupAge);
  tempPuppyArray.push(newPostPuppy);
  return {message:"Success!", puppy: newPostPuppy};
}


//updating puppy
function updatePuppy(params, body){
  var pup = pupFilter(params);
  if (pup.length > 0){
  for (var i = 0; i < tempPuppyArray.length; i++) {
      if (tempPuppyArray[i].pupID === +params.id) {
        for (key in body) {
          if (key === 'pupName') {
            tempPuppyArray[i].pupName = body.pupName
          } else if (key === 'pupAge') {
           tempPuppyArray[i].pupAge = +body.pupAge
          }
        }
      }
    }
    return {message: "Puppy updated.", puppy: pup}
  } else {
    return
      {message: "Puppy does not exist."};
  }
}

//delete puppy
function deletePuppy(params, body){
  var pup = pupFilter(params);
  if (pup.length>0){
    for (var i = 0; i < tempPuppyArray.length; i++) {
      if (tempPuppyArray[i].pupID === parseInt(params.id)) {
        var tempPuppy = tempPuppyArray.splice(i, 1)
        return{
          message: 'The puppy has been removed.',
          puppy: tempPuppy
        }
      }
    };
  } else {
    return "Puppy does not exist";
  }
}

module.exports = {
  pupFilter:pupFilter,
  seePuppy:seePuppy,
  addPuppy:addPuppy,
  updatePuppy:updatePuppy,
  deletePuppy:deletePuppy,
}
