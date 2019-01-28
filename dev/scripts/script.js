$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });
  
  
  const $body = document.querySelector('body');   
  const $btnMobileMenu = document.querySelector('#mobile-menu');      
  
  $btnMobileMenu.addEventListener('click', function(){
      
      $body.classList.toggle('show-mobile-menu');	
      
  });
  