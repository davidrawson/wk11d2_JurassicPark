const assert = require('assert');
const Dinosaur = require('../dinosaur');

describe (Dinosaur, function(){

  beforeEach(function(){
    dinosaur1 = new Dinosaur("Tyrannosaurus");
    dinosaur2 = new Dinosaur("Velociraptor");
    dinosaur3 = new Dinosaur("Triceratops");
  })

}
