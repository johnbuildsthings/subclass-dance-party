/*Hero class 
  inherites from Character class*/

/*all heros need:
    to handle keyboard input to move
    */

var Hero = function(top, left){
  Character.call(this);
  
  var wWidth = $(window).width();
  var wHeight = $(window).height();

  this.setPosition(top, left);

}

Hero.prototype = Object.create(Character.prototype);
Hero.prototype.constructor = Hero;

Hero.prototype.move = function(top, left){
  var step = step; //calls CharacterSuperClass step method;
  
  this.setPosition(top, left);

}