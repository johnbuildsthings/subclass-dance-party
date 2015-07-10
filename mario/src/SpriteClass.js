/*sprite super class*/

/*
sprite subclasses will include 
  mario/enemy
  blocks
  mushrooms

all sprites need:
  screen position
  collision handling
    ability to interact with each other when screen position 
    collides
*/

var Sprite = function(){
  this.x = 0;
  this.y = 0;
  this.setPosition.call(this,0,0);
}

// Sprite.prototype.collisionHandle = function(){
//   /*not sure yet what goes here*/
// }

// Sprite.prototype.gravity = function(){
//   /*makes objects fall toward bottom of screen*/
// }
Sprite.prototype.step = function(timeBetweenSteps){
  setTimeout(this.step.bind(this), timeBetweenSteps);
}


Sprite.prototype.setPosition = function(x, y){
  this.x = x;
  this.y = y;
  this.$node.css({'bottom': this.x, 'left': this.y});
}

Sprite.prototype.getPosition = function(){
  var style = {
    x: this.x,
    y: this.y
  }
  return style;
}