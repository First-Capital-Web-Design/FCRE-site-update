$(document).ready(function(){
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 70) {
          $(".rd-navbar-static").css({"box-shadow": "1px 1px 4px #546e7a, -70px 0 270px -60px #546e7a inset" , "margin-top" : "0px"});
          $(".rd-navbar-nav").css({"box-shadow": "0 0 0 transparent" , "background-color" : "transparent" , "margin-top" : "0px"});
          $(".logo").css({"width" : "140px" , "height" : "54.5px"});
      } else {
        $(".rd-navbar-static").css({"box-shadow": "1px 1px 4px transparent"});
        $(".rd-navbar-nav").css({"box-shadow": "1px 1px 4px #546e7a, -70px 0 270px -60px #546e7a inset" , "background-color" : "#d9d9d9" , "margin-top" : "0px"});
        $(".logo").css({"width" : "280px" , "height" : "109px"});
      }
  });

});
