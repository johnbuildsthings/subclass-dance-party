/*Character superClass
  inherites from Sprite class*/


/*
every character needs:
  screen position
  collision handling
  ability to move
*/

var Character = function(element){
  /*need ability to handle collisions with other
  character class*/
  Sprite.call(this);
};

Character.prototype = Object.create(Sprite.prototype);
Character.prototype.constructor = Character;

Character.prototype.CharacterCollisionHandling = function(char1, char2){
  /*handles collision of characters*/
}

Character.prototype.step = function(){
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}

Character.prototype.move = function(keyEvent){
  var currentX = this.getPosition().x;  
  var currentY = this.getPosition().y;
  var x = 0;
  var y = 0;
  if (keyEvent === 39) {
    this.$node.removeClass('flip-v')
    this.$node.toggleClass('step-one')
    this.setPosition(currentX + x, currentY + 10);
  }else if(keyEvent === 37){
    this.$node.addClass('flip-v')
    this.$node.toggleClass('step-one')
    this.setPosition(currentX + x, currentY - 10);
  }else if(keyEvent === 38){
    var test = this.setPosition.bind(this);
    setTimeout(function(){
      for (var i = 0; i < 128; i=i+10) {
        console.log(currentX);
        test(currentX + i, currentY);
      }  
    }, 100);
    // debugger;
  }
}