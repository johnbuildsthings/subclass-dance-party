/*Character superClass
  inherites from Sprite class*/


/*
every character needs:
  screen position
  collision handling
  ability to move
*/

var Character = function(){
  /*need ability to handle collisions with other
  character class*/
  Sprite.call(this);
}

Charater.prototype = Object.create(Sprite.prototype);
Charater.prototype.constructor = Charater;

Charater.prototype.CharacterCollisionHandling = function(char1, char2){
  /*handles collision of characters*/
}

Charater.prototype.step = function(){
  
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}