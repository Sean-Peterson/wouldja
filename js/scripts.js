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
    stack[current[random]].shown=true;
    return picture;
  }else {
    if (counter==0) {
      alert("Yes to all of those? Even snacks girl? Fuck, man. Good luck. Bye.");
    }else if (counter>0&&counter<3){
      alert("Looks like you have just "+counter+" drink. Your odds of waking up next to a 3 are high. Stop drinking or you may end up on barstool sports.");
    }else if (counter>3&&counter<=5) {
      alert("Drink "+counter+" times. You're pretty buzzed rn. I'd slow down if you don't wanna end up with an ugo.");
    }else {
      alert("Ur standards are too high. Look in the mirror. Should you be this choosy? Take your "+counter+" drinks. It should help.");
    }
    start();
    counter = 0;
  }
}
var counter = 0;
var nope = function(){
  counter++;
  console.log(counter);
  if (counter > 1) {
    return counter + " drinks, bitch";
  }else {
    return counter + " drink, bitch";;

  }
}

$(document).ready(function(){
  $('#start').on({
    'click': function(){
      start();
      var picture = runIt();
      $('#photo').attr('src',picture);
      $('.frame').removeClass('hidden');
      $('.buttons').removeClass('hidden');
      $('.instructions').addClass('hidden');
    }
  });
  $('#left-btn').on({
    'click': function(){
      var picture = runIt();
      var count = nope();
      if (picture == undefined) {
        $('.frame').addClass('hidden');
        $('.buttons').addClass('hidden');
        $('.instructions').removeClass('hidden');
        $('#nope').text('');
      }else {
        $('#photo').attr('src',picture);
        $('#nope').text(count);
      }
    }
  });
  $('#right-btn').on({
    'click': function(){
      var picture = runIt();
      if (picture == undefined) {
        $('.frame').addClass('hidden');
        $('.buttons').addClass('hidden');
        $('.instructions').removeClass('hidden');
        $('#nope').text('');
      }else {
        $('#photo').attr('src',picture);
      }

    }
  });

})
