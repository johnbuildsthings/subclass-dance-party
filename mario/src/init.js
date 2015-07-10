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
  
  var wWidth = $(window).width();
  var wHeight = $(window).height();

  var randomCloudGenerator = function(){
    var x = (Math.random() * wHeight) + 128;
    var y = Math.random() + wWidth;
    var speed = Math.random() * 500 + 250;
    var cloudType = ['one', 'two', 'three'];
    var getCloudType = cloudType[Math.floor(Math.random()*3)]
    var cloud = new Cloud(x, y, getCloudType, speed);
    $("#stage").prepend(cloud.$node);
  }

  window.enemy = new Enemy(128, 500, 'ghoomba');
  // window.cloud1 = new Cloud(400, 500, 'one');
  // window.cloud2 = new Cloud(300, 500, 'two');

  $(".cloudGenerator").on('click', function() {
    randomCloudGenerator();
  });
  
  randomCloudGenerator();
  randomCloudGenerator();
  randomCloudGenerator();

  $("#stage").prepend(enemy.$node);
  // $("#stage").prepend(cloud1.$node);
  // $("#stage").prepend(cloud2.$node);
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

  var addStatic = function(x, y, classNames) {
    var thing = new Layout(x, y, classNames);
    $('#stage').prepend(thing.$node);  
  }

  var layoutGenerator = function(){

  }
  addStatic(128, Math.random()*500 + 100, 'hill large');
  addStatic(128, Math.random()*200, 'hill small');
  addStatic(128, wWidth - 250, 'castle large');
  addStatic(256, 256, 'block coin');
  addStatic(256, 320, 'block brick');
  addStatic(256, 384, 'block brick');
  // Add static elements
  

  $(".startGame").on("click", function(event){
    //var characterFunctionName = $(this).data("hero-name");
    //var characterMakerFunction = window[characterFunctionName];

    
  });

});