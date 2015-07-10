/*Cloud class 
  makes moving clouds
  */

var Cloud = function(x,y, number, speed){
  this.$node = $('<div class="cloud ' + number + '"></div>');
  
  Layout.call(this, x, y);
  this.speed = speed;
  // this.setPosition(x, y);
  this.step();
}

Cloud.prototype = Object.create(Layout.prototype);
Cloud.prototype.constructor = Cloud;

Cloud.prototype.step = function(){
  Layout.prototype.step.call(this, this.speed);
  var currentX = this.getPosition().x;  
  var currentY = this.getPosition().y;

  var wWidth = $(window).width;

  
  this.setPosition(currentX, currentY - 10);
    
}