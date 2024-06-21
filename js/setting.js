/*----------------------------------------
	Pages
----------------------------------------*/
$('.js-customer').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	centerMode: true,
	centerPadding: '120px',
	autoplay: true,
	responsive: [
		{
		  breakpoint: 1200,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
		  }
		},
		{
			breakpoint: 835,
			settings: {
			  slidesToShow: 3,
				slidesToScroll: 1,
				centerPadding: '50px',
			}
		}
	]
});

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