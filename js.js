$(window).scroll(() => {
	const x = $(this).width() - $('.block').width();
	const j = $('body').height() - this.innerHeight - x
	$('.block').css("left", $(this).scrollTop() * (x / (x + j)));
});