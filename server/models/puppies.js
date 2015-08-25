function Puppy(pupID, pupName, pupAge){
  this.pupID = pupID;
  this.pupName = pupName;
  this.pupAge = pupAge;
};


var tempPuppyArray =  [];

var moonMoon = new Puppy(1, "Moon Moon", 3);
var doge = new Puppy(2, "Doge", 1.5);
var fido = new Puppy(3, "Fido", 6);
var taco = new Puppy(4, "Taco", 6);

tempPuppyArray.push(moonMoon, doge, fido, taco);




module.exports = {
  Puppy:Puppy,
  tempPuppyArray:tempPuppyArray,
}
