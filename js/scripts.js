var Pic = function(src, serial) {
    this.src = src;
    this.shown = false;
    this.serial = serial;
}

var stack = [];

var counter = new Array(17);

for (var i = 0; i < counter.length; i++) {
  var src = 'css/imgs/'+i+'.jpg';
  var pic = new Pic(src, i);
  stack.push(pic);
}

var runIt = function(){
  
}

$(document).ready(function(){
  $('#left-btn').on({
    'click': function(){

      $('#photo').attr('src',picture);
    }
  });
  $('#right-btn').on({
    'click': function(){
      var max = 16;
      var min = 0;
      var random = Math.floor(Math.random() * (max - min + 1)) + min;
      var picture = 'css/imgs/'+random+'.jpg';
      $('#photo').attr('src',picture);
    }
  });

})
