const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
}


Park.prototype.getName = function(){
    return this.name;
}

Park.prototype.getTicketPrice = function(){
    return this.ticketPrice;
}

Park.prototype.getDinosaurCollection = function(){
    return this.dinosaurCollection;
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    let index = this.dinosaurCollection.indexOf(dinosaur);
    this.dinosaurCollection.splice(index, 1);
}

Park.prototype.giveMeMostPopularDino = function(){
    let mostPopular = this.getDinosaurCollection()[0];
    for (let dinosaur of this.getDinosaurCollection()){
        if (mostPopular.getNumberOfGuestsVisiting() < dinosaur.getNumberOfGuestsVisiting()){
            mostPopular = dinosaur;

        }
    }
    return mostPopular;
}


Park.prototype.findAllDinosaursOfSpecies = function(species){
    allDinosaursOfSpecies = [];
    for (let dino of this.getDinosaurCollection()){
        if(dino.getSpecies() === species){
            allDinosaursOfSpecies.push(dino);
        }
    }
    return allDinosaursOfSpecies;
}

Park.prototype.removeAllDinosaursOfSpecies = function(species) {
    let allDinosaursNotOfSpecies = [];
    for (let dino of this.getDinosaurCollection()) {
        if (dino.getSpecies() !== species) {
            allDinosaursNotOfSpecies.push(dino);
        }
    }
    this.dinosaurCollection = allDinosaursNotOfSpecies;
}



Park.prototype.ticketsAmmountPerDay = function(){
    let ticketAmmountPerDay = 0;
    for (let dino of this.getDinosaurCollection()) {
        ticketAmmountPerDay += dino.getNumberOfGuestsVisiting();
    }
    return ticketAmmountPerDay;
}

Park.prototype.ticketsAmmountPerYear = function(){
    let ticketAmmountPerYear = this.ticketsAmmountPerDay() * 365;
    return ticketAmmountPerYear;
}


Park.prototype.annualRevenue = function(){
    let annualRevenue = this.ticketsAmmountPerYear() * this.ticketPrice;
    return annualRevenue;
}




module.exports = Park;