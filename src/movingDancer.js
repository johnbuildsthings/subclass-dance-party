var MovingDancer = function(top, left, movement, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.movement = movement;

};

MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

MovingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  /*Dancer.prototype.setPosition.call(this, this.top, this.left, function(){
    Dancer.prototype.step.call(this);
  });*/
  
  // get current co-ordinates
  var left = Number(this.$node.css('left').replace('px',''));
  var top = Number(this.$node.css('top').replace('px',''));
  var wHeight = $(window).height();
  var wWidth = $(window).width();

  
  if(left > wWidth){
    left = 0;
  }else if(top > wHeight){
    top = 0;
  }


  this.setPosition(top+2, left+2);


}
