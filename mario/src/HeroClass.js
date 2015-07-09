/*Hero class 
  inherites from Character class*/

/*all heros need:
    to handle keyboard input to move
    */

var Hero = function(bottom, left){
  Character.call(this, '<div class="hero luigi stand"></div>');
  
  //var wWidth = $(window).width();
  //var wHeight = $(window).height();
  // debugger;
  this.setPosition(bottom, left);

}

Hero.prototype = Object.create(Character.prototype);
Hero.prototype.constructor = Hero;

Hero.prototype.moveRight = function(){
  
  var left = this.getPosition().left;  
  var bottom = this.getPosition().bottom;
  console.log(left);

  this.setPosition(bottom, left+10);

}