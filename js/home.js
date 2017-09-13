// $(document).ready(function() {
//    $('a[href*=#]').bind('click', function(e){
// 	e.preventDefault(); //prevent the "normal" behaviour which would be a "hard" jump
       
// 	var target = $(this).attr("href");
			
// 		$('html, body').stop().animate({ scrollTop: $(target).offset().top}, 500, function() {
// 	     location.hash = target;  //attach the hash (#jumptarget) to the pageurl
// 	});
			
// 	return false;
//    });
// });

// Smooth Scrolling
$(document).ready(function(){
	var scrollLink = $('.scroll');

	scrollLink.click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 500);
	});
//Link Ativo
	$(window).scroll(function(){
		var scrollbarLocation = $(this).scrollTop();

		scrollLink.each(function(){
			var sectionOffset = $(this.hash).offset().top

			if( sectionOffset <= scrollbarLocation) {
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
			}
		})
	})
})