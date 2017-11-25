var Pic = function(serial) {
    this.shown = false;
    this.serial = serial;
}

var stack = [];

var start = function(){
  var counter = new Array(17);
  for (var i = 0; i < counter.length; i++) {
    var pic = new Pic(i);
    stack[i]=pic;
  }
}

var runIt = function(){
  var current = [];
  for (var i = 0; i < stack.length; i++) {
    if (stack[i].shown == false) {
      serial = stack[i].serial;
      pos = current.length;
      current[pos]=serial;
    }
  }
  if (current.length) {
    var max = (current.length-1);
    var min = 0;
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
    var picture = 'css/imgs/'+current[random]+'.jpg';
    console.log(picture);
    stack[current[random]].shown=true;
    return picture;
  }else {
    alert("you win")
  }
}

$(document).ready(function(){
  start();
  $('#left-btn').on({
    'click': function(){
      var picture = runIt();
      $('#photo').attr('src',picture);
    }
  });
  $('#right-btn').on({
    'click': function(){
      var picture = runIt();
      $('#photo').attr('src',picture);
    }
  });

})
