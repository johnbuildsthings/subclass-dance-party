// Layout class for all layout objects like hills clouds etc

var Layout = function(x,y){
  Sprite.call(this);
  this.setPosition(x,y);
}

Layout.prototype = Object.create(Sprite.prototype);
Layout.prototype.constructor = Layout;

