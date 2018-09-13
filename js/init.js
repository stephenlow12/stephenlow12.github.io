document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});


  $(window).scroll(function() {
    if ($(document).scrollTop() > 600) {
      $('nav').removeClass('transparent');
    } else {
      $('nav').addClass('transparent');
    }
  });
