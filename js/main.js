$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		nav: false,
		autoplay: true,
		autoplayTimeout: 100000,

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

$(".customNextBtn").click(function () {
	owl.trigger("next.owl.carousel");
});

$(".customPrevBtn").click(function () {
	owl.trigger("prev.owl.carousel", [300]);
});

$(".dropdownLink").click(function () {
	$(".dropdown").toggleClass("dropdown-active");
});

$(".owl-carousel").animate({ opacity: "1" }, 1000);

var width = $(window).width();
window.onresize = function () {
	location.reload();
};
if (width < 890) {
	$(".float-bg").animate({ top: "-100%" }, 800);
	console.log("mali ekran");
} else {
	$(".float-bg").animate({ left: "-100%" }, 800);
}
