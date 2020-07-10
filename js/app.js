$(function () {
	//FILTER
	let filter = $("[data-filter]");

	filter.on("click", function (event) {
		event.preventDefault();

		let cat = $(this).data('filter');

		if (cat == 'all') {
			$("[data-cat]").removeClass("hide");
		} else {
			$("[data-cat]").each(function () {
				let workCat = $(this).data('cat');

				if (workCat != cat) {
					$(this).addClass('hide');
				} else {
					$(this).removeClass('hide');
				}
			});
		}
	});


	//MODAL

	let modalCall = $("[data-modal]");

	modalCall.on('click', function (event) {
		event.preventDefault();
		let $this = $(this);
		let modalId = $this.data('modal');
		
		$(modalId).addClass('show');
		$("body").addClass('no-scroll');
		
		setTimeout(function() {
			$(modalId).find(".modal__dialog").css({
				opacity: "1"
			});
		},50);
		
		$('[data-slider="slick"]').slick('setPosition');
	})
	
	let modalClose = $("[data-close]");
	
	modalClose.on('click', function (event) {
		
		event.preventDefault();
		let $this = $(this);
		let modalParent = $this.parents('.modal');
		
		modalParent.find(".modal__dialog").css({
			opacity: "0"
		});
		
		setTimeout(function() {
			
			modalParent.removeClass('show');
			$("body").removeClass('no-scroll');
				
		},150);
		
	})
	
	$('.modal').on('click', function (event) {
		$(this).removeClass('show');
		$("body").removeClass('no-scroll');
		
	})
	
	$('.modal__dialog').on('click', function (event) {
		event.stopPropagation();
	})
	
	//SLIDER :https://kenwheeler.github.io/slick/
	
	$('[data-slider="slick"]').slick({
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  fade:true,
		  arrows:false,
		  dots:true
	});
	
	$('.slickPrev').on('click', function(event) {
		let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
		event.preventDefault();
		currentSlider.slick('slickPrev');
	})
	
	$('.slickNext').on('click', function(event) {
		let currentSlider = $(this).parents('.modal').find('[data-slider="slick"]');
		
		event.preventDefault();
		
		currentSlider.slick('slickNext');
	})
	
	
	//MOBILE NAV
	const nav = $("#nav");
	const navToggle = $("#navToggle");
	
	navToggle.on('click', function(Event){
		Event.preventDefault();
		
		nav.toggleClass("show");
	})
	
});
