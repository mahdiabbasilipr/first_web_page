// const a = 15;
// console.log("salam");


// function change_text() {
//   document.getElementById("footer").innerHTML = "footer from javascript"
// }
// var is_hide = 0;
// function hide_about() {
//   if (is_hide == 0){
//     document.getElementById("about").style.visibility = "hidden"
//     is_hide = 1
//   }else {
//     document.getElementById("about").style.visibility = "visible"
//     is_hide = 0
//   }
//
// }
$(function () {
  $("#loading_page").fadeTo(1000, 0.5).delay(2000).fadeTo(1000, 0).hide(1003)

  $("#jump_down").click(
    function () {
      $("#wrapper").slideToggle(1000)
    }
  )

  $("#navbar_about").click(
    function () {
      $(this).css({"color": "red", "background-color": "red"});
    }
  )

  $("a").on('click',function (event) {
    if (this.hash !== ""){
      event.preventDefault();
      var hash = this.hash;
      $('html , body').animate({
        scrollTop : $(hash).offset().top - 70
      },1000,function(){
        window.location.hash = hash;
      })
    }
  })
})
