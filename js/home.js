
// Smooth Scrolling
$(document).ready(function(){
	var scrollLink = $('.scroll');	

	scrollLink.click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 500);
	});
	$('.main-title').on("click", function() {
+        url = $(this).find('span').innerHTML();
         alert(url);
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
