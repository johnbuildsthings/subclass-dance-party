/*Hero class 
  inherites from Character class*/

/*all heros need:
    to handle keyboard input to move
    */

var Hero = function(x, y, name){
  this.$node = $('<div class="hero ' + name + ' stand"></div>');
  Character.call(this);
  //var wWidth = $(window).width();
  //var wHeight = $(window).height();
  // debugger;
  this.setPosition(x, y);

}

Hero.prototype = Object.create(Character.prototype);
Hero.prototype.constructor = Hero;

Hero.prototype.moveRight = function(keyEvent){
  var currentX = this.getPosition().x;  
  var currentY = this.getPosition().y;

  this.$node.removeClass('flip-v')
  this.$node.toggleClass('step-one')
  this.setPosition(currentX, currentY + 10);
}

Hero.prototype.moveLeft = function(keyEvent){
  var currentX = this.getPosition().x;  
  var currentY = this.getPosition().y;
  
  this.$node.addClass('flip-v')
  this.$node.toggleClass('step-one');
  this.setPosition(currentX, currentY - 10);
}
 
Hero.prototype.jump = function(keyEvent){
  var currentX = this.getPosition().x;  
  var currentY = this.getPosition().y;
  
  this.$node
      .animate({'bottom': currentX + 200}, 200)
      .animate({'bottom': currentX}, 200);
}