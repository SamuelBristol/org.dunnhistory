/* jslint esversion: 6 */
(function($){
  $(function(){

    // Navigation initialization
    $('.button-collapse').sideNav();

    // Mobile navbar close botton handler
    $('#closeMobileNav').click( () => {
      $('.button-collapse').sideNav('hide');
    });

    // Index slider init
    $('.slider').slider();

    // Init any scrollspy elements
    $('.scrollspy').scrollSpy();

    // Init any pushpin elements
    $('#pushpin-navbar').pushpin({
      top: $('#pushpin-navbar').offset().top
    });
    $('#pushpin-toc').pushpin({
      top: $('#pushpin-toc').offset().top,
      offset: 75
    });

    Materialize.showStaggeredList("#content-items");
  }); // end of document ready
})(jQuery); // end of jQuery name space
