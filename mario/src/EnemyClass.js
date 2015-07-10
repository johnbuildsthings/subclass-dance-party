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
  this.setPosition(x, y);
  this.step();
}

Enemy.prototype = Object.create(Character.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.step = function(){
  Character.prototype.step();
  var currentX = this.getPosition().x;  
  var currentY = this.getPosition().y;

  var wWidth = $(window).width;

  
  if(currentY+10 > wWidth){
    this.setPosition(currentX, currentY - 10);
  }else{
    this.setPosition(currentX, currentY + 10);
  }


  
}

