
const Dinosaur = function (species, diet, guestsAttractedPerDay) {
  this.species = species;
  this.diet = diet;
  this.guestsAttractedPerDay = guestsAttractedPerDay;
}

module.exports = Dinosaur;

Dinosaur.prototype.getDiet = function(){
  return this.diet;
}

Dinosaur.prototype.getSpecies = function(){
  return this.species;
}

Dinosaur.prototype.getNumberOfGuestsVisiting = function(){
  return this.guestsAttractedPerDay;
}