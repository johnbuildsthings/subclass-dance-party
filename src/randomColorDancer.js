var RandomColorDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

}
RandomColorDancer.prototype = Object.create(Dancer.prototype);
RandomColorDancer.prototype.constructor = RandomColorDancer;

RandomColorDancer.prototype.step = function() {
  var colorArray = ['red', 'green', 'blue', 'orange', 'purple'];
  Dancer.prototype.step.call(this);
  var randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
  this.$node.css('background-color', randomColor);
}

