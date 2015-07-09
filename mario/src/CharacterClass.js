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

Character.prototype = Object.create(Sprite.prototype);
Character.prototype.constructor = Character;

Character.prototype.CharacterCollisionHandling = function(char1, char2){
  /*handles collision of characters*/
}

Character.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}