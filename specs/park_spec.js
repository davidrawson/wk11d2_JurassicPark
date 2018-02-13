const assert = require('assert');
const Park = require('../park');
const Dinosaur = require('../dinosaur');

describe ('Park', function(){

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let park;

  beforeEach(function(){
    dinosaur1 = new Dinosaur("Tyrannosaurus", 1);
    dinosaur2 = new Dinosaur("Velociraptor", 9);
    dinosaur3 = new Dinosaur("Triceratops", 2);
    dinosaur4 = new Dinosaur("Velociraptor", 8);

    park = new Park;
  });

  it('enclosure should start empty', function(){
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur', function(){
    park.addDinosaur(dinosaur2);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 1)
  });

  it('should be able to remove all dinosaurs of a particular type', function(){
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur4);
    park.removeType(dinosaur2.type);
    const actual = park.numberOfDinosaurs();
    assert.strictEqual(actual, 2);
  });

  it('should get all the dinosaurs with an offspring count of more than 2', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.overTwoOffspring().length;
    assert.strictEqual(actual, 2);
  });
});
