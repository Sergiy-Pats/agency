jQuery('document').ready(function () {
	$('.burger').click(function (event) {
		$('.burger, .menu, .menu-bg').toggleClass('active');
	});
	function wdth() {
		if (window.innerWidth <= 768) {
			$('#main, body, html, .wrapper, window').css({ 'overflow': 'auto' })
			$('.burger').css({
				'position': 'fixed',
				'top': '0px',
				'right': '0px',
			})
			$('  .menu-bg').css({
				'position': 'fixed',
				'top': '0px',
				'right': '0px',
			})

		}

	}

	$.fn.animate_Text = function () {
		var string = this.text();
		return this.each(function () {
			var $this = $(this);
			$this.html(string.replace(/./g, '<span class="new">$&</span>'));
			$this.find('span.new').each(function (i, el) {
				setTimeout(function () { $(el).addClass('div_opacity'); }, 180 * i);

			});
		});
	};

	let x = 0, y = 0, z = 0;
	if (window.innerWidth <= 768) {
		$(".menu").on("click", "a", function (event) {

			$('.burger, .menu, .menu-bg').removeClass('active');
			event.preventDefault();
			var id = $(this).attr('href'),
				menu_top = $(id).offset().top;
			$('body,html').animate({ scrollTop: menu_top }, 1200);
		});
	}
	$('body').on('scroll', function (e) {
		//let scrl = $('.hello').offset().top;
		//scrl = -scrl
		//console.log(scrl);
		let top_story = $('.story').offset().top;
		let top_services = $('.services').offset().top;
		//let top_portfolio = $('.portfolio').offset().top;


		//console.log(top_story);
		if (top_story <= 250 && x == 0) {

			$('#animate-2').show();
			$('#animate-2').animate_Text();
			x++;
		}
		if (top_services <= 250 && y == 0) {

			$('#animate-3').show();
			$('#animate-3').animate_Text();
			y++;
		}
		///23123123
		/*
		if (top_portfolio <= 50 && z == 0) {

			$('#animate-4').show();
			$('#animate-4').animate_Text();
			z++;
		}
*/

	})




	wdth();
	if (window.innerWidth > 768) {
		$('.menu').on('click', 'a', function (event) {
			event.preventDefault();
			let ind = $('a').index(this);
			//console.log(ind);
			$('.burger, .menu, .menu-bg').removeClass('active');
			$('#main').moveTo(ind - 2);
		})
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

					$('#animate').hide();

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
					$('#animate-2').hide();


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
					$('#animate-3').hide();

				}
			},  // This option accepts a callback function. The function will be called before the page moves.
			afterMove: function (index) {
				if ($('.hello').hasClass('active')) {
					$('#animate').show();
					$('#animate').animate_Text();
				}
				if ($('.story').hasClass('active')) {
					$('#animate-2').show();
					$('#animate-2').animate_Text();
				}
				if ($('.services').hasClass('active')) {
					$('#animate-3').show();
					$('#animate-3').animate_Text();
				}
			},   // This option accepts a callback function. The function will be called after the page moves.
			loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
			keyboard: true,                  // You can activate the keyboard controls
			responsiveFallback: false,        // You can fallback to normal page scroll by defining the width of the browser in which
			// you want the responsive fallback to be triggered. For example, set this to 600 and whenever
			// the browser's width is less than 600, the fallback will kick in.
			direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
		});
	}
	$('#animate').show();
	$('#animate').animate_Text();



})

