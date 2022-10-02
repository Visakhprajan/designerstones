$('.hamburger').click(function(){
  $('body').toggleClass('menu-open')
})

$('header nav .main-nav ul li a').click(function(){
  $('body').removeClass('menu-open')
  $('.hamburger').removeClass('is-active')
})