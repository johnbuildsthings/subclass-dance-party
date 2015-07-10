/*initiates the game*/

// @codekit-prepend "CharacterClass.js";
// @codekit-prepend "HeroClass.js";
// @codekit-prepend "SpriteClass.js";

window.player1 = null;;

$(document).ready(function(){

    if (player1 === null) {
      window.player1 = new Hero(128, 100);
      $("#stage").prepend(player1.$node);
    }
    // move player 1
    $(document).keydown(function(event) {
      player1.move(event.which);
    });

  $(".startGame").on("click", function(event){

    //var characterFunctionName = $(this).data("hero-name");
    //var characterMakerFunction = window[characterFunctionName];

    
  });

});