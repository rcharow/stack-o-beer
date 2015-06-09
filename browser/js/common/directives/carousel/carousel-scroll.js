$(document).ready(function (){
  var carousel = $('#myCarousel')
  console.dir(carousel)
  // carousel.carousel({
  //   interval: 10000
  // })

  $('.carousel .item').each(function(){
    debugger
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    if (next.next().length>0) {
      next.next().children(':first-child').clone().appendTo($(this));
    }
    else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });
})