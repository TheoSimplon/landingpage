$(document).ready(function() {
  var duration = 500;
  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      // Si un défillement de 100 pixels ou plus.
      // Ajoute le bouton
      $('#back-to-top').fadeIn(duration);
    } else {
      // Sinon enlève le bouton
      $('#back-to-top').fadeOut(duration);
    }
  });

  $('#back-to-top').click(function(event) {
    // Un clic provoque le retour en haut animé.
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, duration);
    return false;
  })
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");

}

