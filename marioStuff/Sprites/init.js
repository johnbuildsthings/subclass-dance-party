/*initiates the game*/


$(document).ready(function(){

  $(".startGame").on("click", function(event){
    var characterFunctionName = $(this).data("hero-name");

    var characterMakerFunction = window[characterFunctionName];

    var character = new characterMakerFunction(top, left);
    
    $("body").append(character.$node);
  });

});