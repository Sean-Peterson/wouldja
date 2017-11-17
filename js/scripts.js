



$(document).ready(function(){

  $('#left-btn').on({
    'click': function(){
      // alert('Definitely not drunk yet')
      var max = 16;
      var min = 0;
      var random = Math.floor(Math.random() * (max - min + 1)) + min;
      var picture = 'css/imgs/'+random+'.jpg';
      $('#photo').attr('src',picture);
    }
  });
  $('#right-btn').on({
    'click': function(){
      // alert('I would too')
      var max = 16;
      var min = 0;
      var random = Math.floor(Math.random() * (max - min + 1)) + min;
      var picture = 'css/imgs/'+random+'.jpg';
      $('#photo').attr('src',picture);
    }
  });

})
