/*initiates the game*/

// @codekit-prepend "CharacterClass.js";
// @codekit-prepend "HeroClass.js";
// @codekit-prepend "SpriteClass.js";

window.player1 = null;;
window.player2 = null;;
window.enemy = null;
$(document).ready(function(){

  if (player1 === null) {
    window.player1 = new Hero(128, 100, 'mario');
    $("#stage").prepend(player1.$node);
  }

  if (player2 === null) {
    window.player2 = new Hero(128, 200, 'luigi');
    $("#stage").prepend(player2.$node);
  }
  if (enemy === null){
    window.enemy = new Enemy(128, 500, 'ghoomba');
    $("#stage").prepend(enemy.$node);
  }
  
  var keys = {};

  function keyMapping() {
    for(var key in keys){
      // Player 1 Keys
      if (key === '39')
        player1.moveRight();
      if (key === '37')
        player1.moveLeft();
      if (key === '38')
        player1.jump();
      // Play 2 Keys
      if (key === '68')
        player2.moveRight();
      if (key === '65')
        player2.moveLeft();
      if (key === '87')
        player2.jump();
    }
  }
  // move player 1
  $(document).keydown(function(event) {
    keys[event.which] = true;
    keyMapping();
  });

  $(document).keyup(function (event) {
    delete keys[event.which];
    keyMapping();
  });




  $(".startGame").on("click", function(event){
    //var characterFunctionName = $(this).data("hero-name");
    //var characterMakerFunction = window[characterFunctionName];

    
  });

});