// Replacement Responsive Navbar Menu
// function isBreakpoint( alias ) {
//    return $('.device-' + alias).is(':visible');
// }

$( document ).ready(function() {

  $("#menuToggle").click(function(){
    $(this).toggleClass('collapsed');
    $(this).parents('.menu-nav').find('.menu').slideToggle('slow');
  });

  // if ( is_touch_device() ) {
		// $('.sub-menu--toggle').click(function(e) {
    //   e.preventDefault();
		// 	// $(this).next('.sub-menu').toggleClass('show-sub-menu');
		// 	$(this).parent('.menu__dropdown').toggleClass('show-sub-menu');
		// });
	// }

  // for desktop expanded menu views
  if( isBreakpoint('md') || isBreakpoint('lg') || isBreakpoint('xl') ) {
     //toggles aria-expanded in desktop views on hover
     $('.menu__dropdown').hover(function() {
        // $(this).addClass('open');
        $(this).find('>.sub-menu--toggle').attr('aria-expanded', 'true');
     },
     function() {
        // $(this).removeClass('open');
        $(this).find('>.sub-menu--toggle').attr('aria-expanded', 'false');
     });
     // $('.sub-menu--toggle').on('click', function(e){
     //    if((e.which == '1') && $(this).is(':hover')){
     //       e.stopImmediatePropagation();
     //       if ($(this).attr('target') !== '_blank' ) {
     //          document.location=$(this).attr('href');
     //       }
     //    }
     // });
  }

});
