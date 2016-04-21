
 $(function() {
    //cache the window opject
    var $window = $(window);

    // parallax backgroun effect
    $('section[data-type="background"]').each(function(){

        var $bgobj = $(this);
        $(window).scroll(function(){
            var yPos= -($window.scrollTop() /
            $bgobj.data('speed'));
            var coords= '50% '+ yPos +'px';
            $bgobj.css({backgroundPosition: coords});
        });
    });
});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});

// ======= wow animate ======
new WOW().init();

// ========== smoth scroll =========
smoothScroll.init({
    selector: '[data-scroll]',
    speed: 1200,
    easing: 'easeInOutCubic',
    offset: 90,
    callback: function ( anchor, toggle ) {} // Function to run after scrolling
});
// ======== slider ======
$('.owl-carousel').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:1400,
    animateOut: 'fadeOutLeft',
    animateIn:  'fadeInRight'

})
$('.owl-carousel-1').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:1400,
    nav:true,
    // navText:[&#x27;next&#x27;,&#x27;prev&#x27;],
})
// ======== google map ======
function initialize() {
        var mapCanvas = document.getElementById('googleMap');
        var mapOptions = {
          center: new google.maps.LatLng(19.976876, 42.600871),
          zoom: 17,
            scrollwheel:false,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
      }
      google.maps.event.addDomListener(window, 'load', initialize);
