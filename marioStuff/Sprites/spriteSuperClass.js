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
  this.$node = $('<span class="Sprite"></span>');
  var screenPosition = {
    top: 0,
    left: 0,
  }
  this.setPosition(0,0);
}

Sprite.prototype.collisionHandle = function(){
  /*not sure yet what goes here*/
}

Sprite.prototype.gravity = function(){
  /*makes objects fall toward bottom of screen*/
}

Sprite.prototype.setPosition = function(top, left){
  this.screenPosition.top = this.top + top;
  this.screenPosition.left = this.left + left;
}