/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector('.cbp-af-header'),
		main = document.querySelector('.main-title'),
		canvas = document.getElementById('canvas'),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, 'cbp-af-header-shrink' );
			classie.add(canvas, 'canvasOpacity');

		}
		else {
			classie.remove( header, 'cbp-af-header-shrink' );
			classie.remove(canvas, 'canvasOpacity');
			
		}
		if (sy >= 150) {
			classie.add(main, 'animatedTxt');
		} else {
			classie.remove(main, 'animatedTxt');
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();