jQuery(function($) {

	$('.responsive').on('afterChange', function(event, slick, currentSlide, nextSlide){
		const item = $(slick.$slides.get(currentSlide));
		const itemNew = item.find('.item-my').data('category');
		$(".slider-category > h2").empty();
		$('.slider-category > h2').append(itemNew);

	});
});