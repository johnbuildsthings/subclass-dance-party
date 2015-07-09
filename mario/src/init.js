/*initiates the game*/

// @codekit-prepend "CharacterClass.js";
// @codekit-prepend "HeroClass.js";
// @codekit-prepend "SpriteClass.js";

window.player1 = null;;

$(document).ready(function(){


  $(".startGame").on("click", function(event){
    $(document).keydown(function(event) {
      console.log(event.which);
    });

    //var characterFunctionName = $(this).data("hero-name");
    //var characterMakerFunction = window[characterFunctionName];

    if (player1 === null) {
      window.player1 = new Hero(128, 100);
      $("#stage").prepend(player1.$node);
    }
    
  });

});