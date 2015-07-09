var lineUp = function() {
  var allDancers = stage;
  var numberOfDancers = allDancers.length;
  var windowWidth = $(window).width();

  allDancers.forEach( function(dancer, i){
    // debugger;
    var test = windowWidth / numberOfDancers
    dancer.setPosition(200, test * i + (test/2));
  });
}