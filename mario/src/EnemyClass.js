/*Enemy class 
  inherites from Character class*/

/*all Enemys need:
    to handle keyboard input to move
    */

var Enemy = function(x, y, name){
  this.$node = $('<div class="Enemy ' + name + ' stand"></div>');
  Character.call(this);
  //var wWidth = $(window).width();
  //var wHeight = $(window).height();
  // debugger;
  this.direction = 'left';
  this.setPosition(x, y);
  this.step();
}

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.step = function(){
  Sprite.prototype.step.call(this, 100);
  var currentX = this.getPosition().x;  
  var currentY = this.getPosition().y;

  var wWidth = $(window).width();

  this.$node.toggleClass('step');



  if(currentY + 64 > wWidth){
    this.direction = 'left';
  }else if (currentY < 0) {
    this.direction = 'right';
  } 

  if(this.direction === 'right'){
    this.setPosition(currentX, currentY + 10);
  }else{
    this.setPosition(currentX, currentY - 10);    
  }

  
}

