const assert = require('assert');
const Dinosaur = require('../dinosaur');

describe ('Dinosaur', function(){

  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur("Tyrannosaurus", 3);
  });

  it('Should have a type', function(){
    const actual = dinosaur.type;
    assert.strictEqual(actual, "Tyrannosaurus");
  });

  it('Should have number of offspring per year', function(){
    const actual = dinosaur.numberOfOffspring;
    assert.strictEqual(actual, 3);
  });


})
