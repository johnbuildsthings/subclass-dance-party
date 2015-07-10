/*Cloud class 
  makes moving clouds
  */

var Cloud = function(x,y, name){
  this.$node = $('<div class="Cloud ' + name + '"></div>');
  
  Layout.call(this, x, y);

  // this.setPosition(x, y);
  this.step();
}

Cloud.prototype = Object.create(Layout.prototype);
Cloud.prototype.constructor = Cloud;

Cloud.prototype.step = function(){
  Layout.prototype.step();
  var currentX = this.getPosition().x;  
  var currentY = this.getPosition().y;

  var wWidth = $(window).width;

  
  if(currentY+10 > wWidth){
    this.setPosition(currentX, currentY - 10);
  }else{
    this.setPosition(currentX, currentY + 10);
  }
  
}