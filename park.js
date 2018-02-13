const Park = function(){
  this.enclosure = [];
}

Park.prototype.numberOfDinosaurs = function(){
  return this.enclosure.length;
}

Park.prototype.addDinosaur = function(dinosaur){
  this.enclosure.push(dinosaur);
}

Park.prototype.removeType = function(type){
  const toBeRemoved = [];
  for (let i = 0; i < this.enclosure.length; i += 1){
    if (this.enclosure[i].type === type){
      toBeRemoved.push(i);
    }
  }
  for (let i = toBeRemoved.length; i > 0; i -= 1){
    index = toBeRemoved[i-1];
    this.enclosure.splice(index, 1);
  }
  // console.log('remove by type',this.enclosure);
}

Park.prototype.overTwoOffspring = function(){
  const toBeReturned = [];
  for (let i = 0; i < this.enclosure.length; i += 1){
    if (this.enclosure[i].numberOfOffspring > 2){
      toBeReturned.push(i);
    }
  }

  const returningDinosaurs = [];

  for (let i = toBeReturned.length; i > 0; i -= 1){
    index = toBeReturned[i-1];
    let dino = this.enclosure.splice(index, 1)
    returningDinosaurs.push(dino);
  }
  // console.log('enclosure', this.enclosure);
  // console.log('returning Dinos', returningDinosaurs);
  return returningDinosaurs;
}

module.exports = Park;
