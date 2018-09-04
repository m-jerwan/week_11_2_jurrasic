const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park_1;
  let dino_1;

  beforeEach(function () {
    park_1 = new Park("Jurrasic", 20)
    dino_1 = new Dinosaur("brontosaurus", "Herbivore", 300)
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
    const actual = park_1.getDinosaurCollection()[0].getDiet();
    assert.strictEqual(actual, "Herbivore");
  });

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
