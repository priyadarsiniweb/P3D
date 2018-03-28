jQuery(function($) {
 
	/*--------------------------------------
	Mobile Menu
	--------------------------------------*/

	var $parentElementToMenu	= $('body'),
	$mobileMenuTriggerClass = $('.toggle-nav'),
	$mobileActiveClass 		= 'menu-active';

	$mobileMenuTriggerClass.click(function(e) {
	  $(this).toggleClass('active');
	  $parentElementToMenu.toggleClass($mobileActiveClass);
	  $('html,body').toggleClass('noScroll');
	  return false;
	});

	//ESC key to remove mobile menu
	$(document).keyup(function(e) {
	  if (e.keyCode == 27) {
	    $parentElementToMenu.toggleClass($mobileActiveClass);
	  }
	});	

	/*--------------------------------------
	Sticky Header
	--------------------------------------*/

	var shrinkHeader = 200;

	$(window).scroll(function () {
	  
	  var scroll = getCurrentScroll();
	  if (scroll >= shrinkHeader) {
	    $('nav').addClass('sticky');
	    //$('.form-tabs').css('margin-top', '185px');
	  }
	  else {
	    $('nav').removeClass('sticky');
	    //$('.form-tabs').css('margin-top', '20px');
	  }
	});

	function getCurrentScroll() {
	  return window.pageYOffset || document.documentElement.scrollTop;
	}
 
});