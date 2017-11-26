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
      alert("You said yes to all of those...? Maybe this game worked too well... Anyways, congratulations and may you wake up next to what you deserve.");
    }else if (counter>0&&counter<3){
      alert("Looks like you have just "+counter+" drink. Your odds of waking up next to a 3 are high. Stop drinking or you'll end up on barstool sports.");
    }else if (counter>3&&counter<5) {
      alert("Drink "+counter+" times. You're pretty buzzed rn. I'd slow down. That or you have terribly low standards.");
    }else {
      alert("You have "+counter+" drinks. Ur standards are too high. Look in the mirror. Should you be this choosy?");
    }
    start();
    counter = 1;
  }
}
var counter = 1;
var nope = function(){
  count = counter++;
  if (count > 1) {
    return count + " drinks, bitch";
  }else {
    return count + " drink, bitch";;

  }
}

$(document).ready(function(){
  start();
  $('#left-btn').on({
    'click': function(){
      var picture = runIt();
      var count = nope();
      $('#photo').attr('src',picture);
      $('#nope').text(count);
    }
  });
  $('#right-btn').on({
    'click': function(){
      var picture = runIt();
      $('#photo').attr('src',picture);
    }
  });

})
