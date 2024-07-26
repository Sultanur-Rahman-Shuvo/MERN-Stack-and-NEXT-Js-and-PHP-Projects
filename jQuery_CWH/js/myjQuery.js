$(document).ready(function () { //so that the my document get ready first and then my js get loaded
  // $(function(){
  // shortcut
  // })


  //your jQuery code here
  // console.log($);
  // console.log(jQuery);
  // $('selector').action(); //syntax
  // $('p').click();
  // $("p").click(function () {
  //   console.log("you have clicked on p", this);
  //   // $('p').hide();
  //   // $(this).hide();
  //   // $('#one').hide();
  //   // $('.two').hide();
  // });

  // $("p").dblclick(function () {
  //   console.log("you have double clicked on p", this);
  //   // $('p').hide();
  //   // $(this).hide();
  //   // $('#one').hide();
  //   // $('.two').hide();
  // });

  // $("p").mouseenter(function () {
  //   console.log("you have entered on p", this);
  //   // $('p').hide();
  //   // $(this).hide();
  //   // $('#one').hide();
  //   // $('.two').hide();
  // });

  // $("p").hover(function () {
  //   console.log("you have hovered on p", this);
  //   // $('p').hide();
  //   // $(this).hide();
  //   // $('#one').hide();
  //   // $('.two').hide();
  // });


  //there are three main selector in jQuery
  // 1. element selector -> 
  // $('p').click();
  // 2. id selector ->
  // $('#one').click()
  // 3. class selector ->
  // $('.two').click()

  //other selectors
  // $('*').click(); //clicks on all elements
  // $('p.two').click();
  // $('p:first').click();

  // Events in jQuery
  // Mouse Events = click, dblclick, mouseenter, mouseleave
  // Keyboard Events = keypress, keydown, keyup
  // Form Events = submit, change, focus, blur
  // Document / Window Events = load, resize, scroll, unload

  // demoing the on method
  $("p").on({
    click: function () {
      console.log("thanks for clicking", this);
    },
    mouseleave: function () {
      console.log("mouseleave");
    }
  });

  // $("#wiki").hide(1000,function () {
  //   console.log("hidden");
  // })
  // $("#wiki").show(1000,function () {
  //   console.log("visible");
  // })

  // $("#toggle").click(function () {
  //   $("#wiki").toggle(2000)
  // })

  //fadeIn(), fadeOut(), fadeToggle(), fadeTo()

  //slide methods - callback functions are optional
  // $("#wiki").slideUp(1000,function(){
  //   console.log("done");
  // })
  // $("#wiki").slideDown(1000)
  // $("#wiki").slideToggle(1000)

  //animate function in jQuery
  // $("#wiki").animate(
  //   {
  //     opacity: 0.3,
  //     height: "150px",
  //     width: "350px"
  //   }, "slow")

  // $("#wiki").animate(
  //   {
  //     opacity: 0.3,
  //     height: "150px",
  //     width: "350px"
  //   }, "fast")

  // $("#wiki").animate(
  //   {
  //     opacity: 0.3
  //   }, 4000)
  // $("#wiki").animate(
  //   {
  //     height: "150px"
  //   }, 4000)
  // $("#wiki").animate(
  //   {
  //     width: "350px"
  //   }, 1000)
  // $("#wiki").stop(function(){
  //   console.log("stopped");
  // });

  // $("#wiki").text()
  // $("#wiki").text("hello world")

  // $("body").html();
  // $("body").html("shuvo is king");

  // $("#ta").val()
  // $("#ta").val("setting into shuvo")

  // $("#inp").empty()
  // $("#wiki").empty()

  // $("#wiki").remove()
  // $("#wiki").addClass("myClass")
  // $("#wiki").removeClass("myClass")
  // $("#wiki").css("background-color","red")

  //AJAX
  // $.get("https://code.jquery.com/jquery-3.7.1.js", function (data, status) {
  //   alert(data);
  //   alert(status);
  // })
  // $.post("https://code.jquery.com/jquery-3.7.1.js", { name: shuvo, page: stylesilo }, function (data, status) {
  //   alert(data);
  //   alert(status);
  // })
});