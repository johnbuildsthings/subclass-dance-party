/*Hero class 
  inherites from Character class*/

/*all heros need:
    to handle keyboard input to move
    */

var Hero = function(x, y){
  this.$node = $('<div class="hero luigi stand"></div>');
  Character.call(this);
  //var wWidth = $(window).width();
  //var wHeight = $(window).height();
  // debugger;
  this.setPosition(x, y);

}

Hero.prototype = Object.create(Character.prototype);
Hero.prototype.constructor = Hero;