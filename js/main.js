$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		nav: false,

		// autoWidth: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});
});

var owl = $(".owl-carousel");
// owl.owlCarousel();
// Go to the next item
$(".customNextBtn").click(function () {
	owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".customPrevBtn").click(function () {
	// With optional speed parameter
	// Parameters has to be in square bracket '[]'
	owl.trigger("prev.owl.carousel", [300]);
});

// function toggleDropDown() {

$(".dropdownLink").click(function () {
	$(".dropdown").toggleClass("dropdown-active");
});
