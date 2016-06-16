$(document).ready(function(){
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 70) {
          //$(".rd-navbar-static").css({"box-shadow": "1px 1px 4px #546e7a, -70px 0 270px -60px #546e7a inset" , "margin-top" : "0px"});
          //$(".rd-navbar-nav").css({"box-shadow": "0 0 0 transparent" , "background-color" : "transparent" , "margin-top" : "0px"});
          //$(".rd-navbar-nav").css("background-color","red");
          $(".rd-navbar-nav").addClass("nav_change");
          $(".rd-navbar-static").addClass("nav_static_change");
          $(".logo").addClass("logo_scrolled");
          //$(".logo_scrolled").removeClass("logo");
          //$(".logo").css({"width" : "140px" , "height" : "54.5px"});
      } else {
        //$(".rd-navbar-static").css({"box-shadow": "1px 1px 4px transparent"});
        //$(".rd-navbar-nav").css({"box-shadow": "1px 1px 4px #546e7a, -70px 0 270px -60px #546e7a inset" , "background-color" : "#d9d9d9" , "margin-top" : "0px"});
        $(".rd-navbar-static").removeClass("nav_static_change");
        $(".rd-navbar-nav").removeClass("nav_change");
        $(".logo").removeClass("logo_scrolled");
        //$(".logo").css({"width" : "280px" , "height" : "109px"});
      }
  });


  if($(".income-fund").length){
    $(".resp-tab-active").removeClass("resp-tab-active");
    $(".resp-tab-content-active").css("display","none");
    $(".resp-tab-content-active").removeClass("resp-tab-content-active");

    $(".income-fund").parent().addClass("resp-tab-active");
    $(".income-fund-text").addClass("resp-tab-content-active");
    $(".income-fund-text").css("display","block");

    console.log("hello");
  }


//   $(window).resize(function(){
//       $('span').text(x += 1);
//   });
//
 });
