var updateScroll = function(){
  if($('#chatMessages').length > 0) {
    $('#chatMessages').stop().animate({
      scrollTop: $('#chatMessages')[0].scrollHeight
    }, 200);
  }
};
