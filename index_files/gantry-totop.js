/*
 * @author    RocketTheme http://www.rockettheme.com
 * @copyright Copyright (C) 2007 - 2014 RocketTheme, LLC
 * @license   http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 */
window.addEvent("domready",function(){var b=document.id("gantry-totop");if(b){var a=new Fx.Scroll(window);b.setStyle("outline","none").addEvent("click",function(c){c.stop();
a.toTop();});}});
jQuery(function($) {	// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('#back-top').fadeIn();
		} else {
			$('#back-top').fadeOut();
		}
	});});