jQuery('document').ready(function () {
	$('.left-nav li:nth-child(1)').toggleClass('active');
	$('.left-nav li').click('a', function (event) {
		event.preventDefault();
		$('.left-nav li').removeClass('active');
		$(this).addClass('active');
	})
	/*
	$('.left-nav').on('click', , function (event) {
		event.preventDefault();
	})
	*/
	$('.burger').click(function (event) {
		$('.burger, .menu, .menu-bg').toggleClass('active');
	});
	function wdth() {
		if (window.innerWidth <= 768) {
			$('#main, body, html, .wrapper').css({ 'overflow': 'auto' })
			$('.burger').css({
				'position': 'fixed',
				'top': '40px',
				'right': '40px',
			})
			$('  .menu-bg').css({
				'position': 'fixed',
				'top': '0px',
				'right': '0px',
			})

		}

	}

	wdth();
	if (window.innerWidth > 768) {
		let burg_proc = $('.burger').css('top');
		$('#main').onepage_scroll({
			sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
			easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
			// "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
			animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
			pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
			updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
			beforeMove: function (index) {
				if ($('.hello').hasClass('active')) {
					$('.burger').css({
						'top': '7vh',
						'transition': 'all 1s ease ',
						'position': 'absoute',
						'right': '0',
					})
					$('.menu').css({
						'top': '20vh',
						'transition': 'all 1s ease'
					})
					$('.menu-bg').css({
						'top': '0',
						'transition': 'all 1s ease'
					})
				}
				if ($('.story').hasClass('active')) {
					$('.burger').css({
						'top': '107vh',
						'transition': 'all 1s ease',
						'position': 'absoute',
						'right': '0',
					})
					$('.menu').css({
						'top': '120vh',
						'transition': 'all 1s ease'
					})
					$('.menu-bg').css({
						'top': '100vh',
						'transition': 'all 1s ease'
					})
				}
				if ($('.services').hasClass('active')) {
					$('.burger').css({
						'top': '207vh',
						'transition': 'all 1s ease',
						'position': 'absoute',
						'right': '0',
					})
					$('.menu').css({
						'top': '220vh',
						'transition': 'all 1s ease'
					})
					$('.menu-bg').css({
						'top': '200vh',
						'transition': 'all 1s ease'
					})
				}
			},  // This option accepts a callback function. The function will be called before the page moves.
			afterMove: function (index) {




			},   // This option accepts a callback function. The function will be called after the page moves.
			loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
			keyboard: true,                  // You can activate the keyboard controls
			responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
			// you want the responsive fallback to be triggered. For example, set this to 600 and whenever
			// the browser's width is less than 600, the fallback will kick in.
			direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  

		});

		//$(".wrapper").moveTo(1);



	}
})

