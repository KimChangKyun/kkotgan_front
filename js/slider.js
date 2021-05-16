$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'
  });


	if($(window).width() > 1990) { 
		$('.slider-nav').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: true,
			centerMode: true,
			focusOnSelect: true,
			autoplay: true,
  			autoplaySpeed: 2000,
		});
  	}else if($(window).width() > 1500){
		$('.slider-nav').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: true,
			centerMode: true,
			focusOnSelect: true,
			autoplay: true,
  			autoplaySpeed: 2000,
		});
	}else if($(window).width() > 1400){
		$('.slider-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: true,
			centerMode: true,
			focusOnSelect: true,
			autoplay: true,
  			autoplaySpeed: 2000,
		});
	}else if($(window).width() > 880){
		$('.slider-nav').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: true,
			centerMode: true,
			focusOnSelect: true,
			autoplay: true,
  			autoplaySpeed: 2000,
		});
	}else if($(window).width() > 680){
		$('.slider-nav').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: true,
			centerMode: true,
			focusOnSelect: true,
			autoplay: true,
  			autoplaySpeed: 2000,
		});
	} else{
		$('.slider-nav').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: true,
			centerMode: true,
			focusOnSelect: true,
			autoplay: true,
  			autoplaySpeed: 2000,
		});
	}


	$('.story_slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		focusOnSelect: true,
		// autoplay: true,
		// autoplaySpeed: 1800,
		vertical: true,
		verticalSwiping: true,
		// touchMove: true,
		// scrolling: true,
	});
	
	var slider = $(".story_slider");
	var slider_fix_count = 0

	// slider.on('wheel', (function(e) {
	// 	e.preventDefault();

	// 	if (e.originalEvent.deltaY < 0) {
	// 		$(this).slick('slickPrev');
	// 	} else {
	// 		$(this).slick('slickNext');
			
	// 	}
	// }));
	$(slider).on("afterChange", function(){
		slider_fix_count++
	});
	$(document).on('wheel', (function(e) {
		var story_slider_top = Math.ceil($(".story_slider").offset().top);
		var now_top = $(this).scrollTop()
		
		if(story_slider_top <= now_top + 300){
			if (e.originalEvent.deltaY < 0) {
				$("html").css({"overflow":"scroll"})
			} else {
				if(slider_fix_count <= 2){
					$("html").css({"overflow":"hidden"});
					$(slider).slick('slickNext');	
				}else{
					$("html").css({"overflow":"scroll"});
				}
			}
		}else{
			
		}
	}))
	
