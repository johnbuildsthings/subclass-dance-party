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

var Sprite = function(element){
  this.$node = $('<div class="hero luigi stand"></div>');
  this.bottom = 0;
  this.left = 0;
  
  this.setPosition.call(this,0,0);
}

// Sprite.prototype.collisionHandle = function(){
//   /*not sure yet what goes here*/
// }

// Sprite.prototype.gravity = function(){
//   /*makes objects fall toward bottom of screen*/
// }

Sprite.prototype.setPosition = function(bottom, left){
  this.bottom = bottom;
  this.left = left;
  debugger;
  this.$node.css({'bottom': this.bottom, 'left': this.left});
}

Sprite.prototype.getPosition = function(){
  var style = {
    bottom: this.bottom,
    left: this.left, //these not working yet
  }
  return style;
}