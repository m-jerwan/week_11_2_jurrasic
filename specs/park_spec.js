const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park_1;
  let dino_1;
  let dino_2;

  beforeEach(function () {
    park_1 = new Park("Jurrasic", 20);
    dino_1 = new Dinosaur("Brontosaurus", "Herbivore", 300);
    dino_2 = new Dinosaur("T-rex", "Carnovore", 500);
  })

  it('should have a name', function(){
    const actual = park_1.getName();
    assert.strictEqual(actual, "Jurrasic")

  });

  it('should have a ticket price', function(){
    const actual = park_1.getTicketPrice();
    assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park_1.getDinosaurCollection();
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park_1.addDinosaur(dino_1);
    const actual = park_1.getDinosaurCollection()[0];
    assert.deepStrictEqual(actual, dino_1);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park_1.addDinosaur(dino_1);
    park_1.removeDinosaur(dino_1);
    const actual = park_1.getDinosaurCollection();
    assert.deepStrictEqual(actual, []);

  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park_1.addDinosaur(dino_1);
    park_1.addDinosaur(dino_2);
    const actual = park_1.giveMeMostPopularDino();
    assert.strictEqual(actual, dino_2);

  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park_1.addDinosaur(dino_1);
    park_1.addDinosaur(dino_2);
    const actual = park_1.findAllDinosaursOfSpecies("Brontosaurus");
    assert.deepStrictEqual(actual, [dino_1]);

  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park_1.addDinosaur(dino_1);
    park_1.addDinosaur(dino_2);
    park_1.removeAllDinosaursOfSpecies("Brontosaurus");
    const actual = park_1.getDinosaurCollection();
    assert.deepStrictEqual(actual, [dino_2])
  });

  it('should be able to calculate tickets per day', function(){
    park_1.addDinosaur(dino_1);
    park_1.addDinosaur(dino_2);
    const actual = park_1.ticketsAmmountPerDay();
    assert.strictEqual(actual, 800);

  })

  it('should be able to calculate tickets per year', function(){
    park_1.addDinosaur(dino_1);
    park_1.addDinosaur(dino_2);
    const actual = park_1.ticketsAmmountPerYear();
    assert.strictEqual(actual, 800*365);
  })


  it('should be able to calculate annual revenue', function(){
    park_1.addDinosaur(dino_1);
    park_1.addDinosaur(dino_2);
    const actual = park_1.annualRevenue();
    assert.strictEqual(actual, 800*365*20);
  })


  it('should be able to return diet stock count', function(){
    park_1.addDinosaur(dino_1);
    park_1.addDinosaur(dino_2);
    const actual = park_1.dinoDietTypeStockCount();
    const expected = { Herbivore: 1, Carnovore: 1}
    assert.deepStrictEqual(actual, expected);
  })

});
