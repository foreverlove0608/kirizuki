/*----------------------------------------
	Pages
----------------------------------------*/
if($(window).width() < 835){
	$('.js-customer').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1
	});
}


var headerHeight = $('#main-header').outerHeight();
var urlHash = location.hash;
if (urlHash) {
	$('body,html').stop().scrollTop(0);
	setTimeout(function () {
		var target = $(urlHash);
		var position = target.offset().top - headerHeight;
		$('body,html').stop().animate({scrollTop: position}, 1000);
	}, 100);
}

$('.js-scroll').click(function () {
	var href = $(this).attr("href");
	console.log(href);
	var target = $(href);
	var position = target.offset().top - headerHeight;
	$('body,html').stop().animate({scrollTop: position}, 1000);
});