/*initiates the game*/

// @codekit-prepend "CharacterClass.js";
// @codekit-prepend "HeroClass.js";
// @codekit-prepend "SpriteClass.js";

window.player1 = null;;
window.player2 = null;;
window.enemy = null;
window.gameElements = [];

$(document).ready(function(){
  var wWidth = $(window).width();
  var wHeight = $(window).height();

  if (player1 === null) {
    window.player1 = new Hero(128, 100, 'mario');
    $("#stage").prepend(player1.$node);
  }

  if (player2 === null) {
    window.player2 = new Hero(128, 200, 'luigi');
    $("#stage").prepend(player2.$node);
  }

  window.enemy = new Enemy(128, 500, 'ghoomba');
  $("#stage").prepend(enemy.$node);
  
  var collisionHandling = function(){
    //68px
    var p1 = player1.getPosition().y;
    var p2 = player2.getPosition().y;
    var e1 = enemy.getPosition().y;
    
    //p1 collision with e1
    if((p1 > e1 && p1 < e1+68) || (p1+68 > e1 && p1+68 < e1+68)){
      player1.$node.addClass('die')
        .animate({"bottom": 256}, 200)
        .animate({"bottom": -70}, 100);
      delete player1.$node;
      console.log('player 1 died');
    }
    //p2 collision with e1
    if((p2 > e1 && p2 < e1+68) || (p2+68 > e1 && p2+68 < e1+68)){
      player2.$node.addClass('die')
        .animate({"bottom": 256}, 200)
        .animate({"bottom": -70}, 100);
      delete player2.$node;
      console.log('player2 died');
    }
  }

  setInterval(collisionHandling, 40);
  

  var randomCloudGenerator = function(){
    var x = (Math.random() * wHeight) + 128;
    var y = Math.random() + wWidth;
    var speed = Math.random() * 500 + 250;
    var cloudType = ['one', 'two', 'three'];
    var getCloudType = cloudType[Math.floor(Math.random()*3)]
    var cloud = new Cloud(x, y, getCloudType, speed);
    $("#stage").prepend(cloud.$node);
  }

  var createGhoomba = function() {
    var enemy = new Enemy(128, Math.floor(Math.random() * wWidth), 'ghoomba');
    $("#stage").prepend(enemy.$node);
  }

  $('.ghoombaGenerator').on('click', function() {
    createGhoomba();
  })

  $(".cloudGenerator").on('click', function() {
    randomCloudGenerator();
  });
  
  randomCloudGenerator();
  randomCloudGenerator();
  randomCloudGenerator();
  randomCloudGenerator();

  var sound = false;
  $('.sound').on('click', function() {
    if (sound === false) {
      $('#tune')[0].play();
      sound = true;
    } else {
      $('#tune')[0].pause();
      sound = false;
    }
  });


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
    // collisionHandling();
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

  addStatic(128, Math.random()*300 + 200, 'hill large');
  addStatic(128, Math.random()*200 + 100, 'hill small');
  addStatic(128, wWidth - 200, 'castle small');
  addStatic(256, 256, 'block brick');
  addStatic(256, 320, 'block brick');
  addStatic(256, 384, 'block coin');
  addStatic(128, -64, 'shrub one');
  addStatic(128, wWidth - 256, 'shrub two');
  addStatic(128, 64, 'pipe');
  // Add static elements


  
  $(".lineUp").on('click', function(){
    var spacing = wWidth/gameElements.length;

    for(var i=0;i<gameElements.length;i++){
      console.log(player1.timer);
      clearTimeout(gameElements[i].timer);
      gameElements[i].setPosition(128, i*spacing);
    }
  });
  console.log(gameElements);

  $(".startGame").on("click", function(event){
    //var characterFunctionName = $(this).data("hero-name");
    //var characterMakerFunction = window[characterFunctionName];

    
  });

});