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









module.exports = Park;