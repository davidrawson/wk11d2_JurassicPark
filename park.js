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
    console.log(this.enclosure[i].type);
    if (this.enclosure[i].type === type){
      toBeRemoved.push(i);
    }
  }
  for (let i = toBeRemoved.length; i >= 0; i -= 1){
    index = toBeRemoved[i];
    this.enclosure.splice(index, 1);
  }

  console.log(this.enclosure);
  console.log(toBeRemoved);
  // for (dinosaur of enclosure){
  // this.enclosure.filter(dinosaur.type === type);

}


module.exports = Park;
