var lineUp = function() {
  var allDancers = stage;
  var numberOfDancers = allDancers.length;
  var windowWidth = $(window).width();

  allDancers.forEach( function(dancer, i){
    // debugger;
    dancer.setPosition(200, ((windowWidth / numberOfDancers) *(i+1)));
  });
}