/*Hero class 
  inherites from Character class*/

/*all heros need:
    to handle keyboard input to move
    */

var Hero = function(bottom, left){
  Character.call(this);
  this.$node = $('<div class="hero luigi stand"></div>');
  
  //var wWidth = $(window).width();
  //var wHeight = $(window).height();

  this.setPosition(bottom, left);

}

Hero.prototype = Object.create(Character.prototype);
Hero.prototype.constructor = Hero;

Hero.prototype.move = function(top, left){
  var step = step; //calls CharacterSuperClass step method;
  
  this.setPosition(top, left);

}