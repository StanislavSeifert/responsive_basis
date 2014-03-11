/* noConflict compatible */
(function($) {
	/* domReady */
	$(function() {
		var moreButton = $(".toggle-box");
		moreButton.append("<span class='icon'>&nbsp;</span>");
		var windowsize = $(window).width();
		var count_rows = $("section.row").length;
		var mobileResolution = 767; // < 768

		function equalHeightBox(){
			for(var i = 0; i < count_rows; i++){ // Vergleicht immer nur die Höhe der Columns pro .row - Ansonsten hätten alle col´s Global die höhe der Höchten col auf der ganzen Seite
				var equalHeightSelect = $("section.row:nth(" + i + ") > div:not(.carousel.slide) > div");
				var equalHeightContentBoxes = equalHeightSelect.find(".row > div > div");
				// Content Grid
				equalHeightContentBoxes.equalHeights();
				// First Level Grid
				equalHeightSelect.equalHeights();
			}
		}

		// Row Fluid - Equal Box Height
		if (windowsize > mobileResolution) {
			$(window).load(function() {
			  equalHeightBox();
			});
		}

		$( window ).resize(function() {
			windowsize = $(window).width();

			// Reset der von jqueryHeight gesetzten Höhen zu "height = auto" -> Um beim Resize-Event auf Basis des benötigten Platzes weiter zu rechnen.
			// Nicht auf Basis des letzt berechneten Wertes
			$("section.row > div > div").css("height","auto").find(".row > div > div").css("height","auto");
			// Row Fluid - Equal Box Height
			if (windowsize > mobileResolution) {
				equalHeightBox();
				
			}else{
				var autoHeightSelect = $("section.row > div > div");
				autoHeightSelect.css("height","auto");
				autoHeightSelect.find(".row > div > div").css("height","auto");
				moreButton.css("height","35px");
			}

		});

		// Smartphone resolution > 768
		// Toggle Boxes
		moreButton.click(function(){
			if (windowsize <= mobileResolution) {
				if ($(this).height() > 35) {
					$(this).css("height", "35px");
					$(this).find(".icon").css("transform", "none");
					$(this).css("background","#fff").removeAttr('style').find("h1").removeAttr('style').parent().find(".more").removeAttr('style');
				} else {
					$(this).css("height", "auto");
					$(this).find(".icon").css("transform", "rotate(90deg)");
					$(this).css("background","#fff").find("h1").css("color","#4283B5").parent().find(".more").css("bottom","2px");
				}
			}
		});


		// Mobile Menu
		var mobile_menu = $('.mobile_menu');
		mobile_menu.find('ul > li.sub > a').click(function() {
			if ($(this).parent().hasClass('active')) { // close
				$(this).parent().removeClass('active');
			} else { // open
				// close all 
				$(this).parent().addClass('active');
			}
			return false; 
		});

 
		// Top Bar
		var mobile_topbar = $('.mobile-topbar');
		mobile_topbar.find('.toggler').click(function() {
			if ($(this).parent().parent().find('ul, .tx-macinasearchbox-pi1').parent().hasClass('open')) {
				$(this).parent().parent().find('ul, .tx-macinasearchbox-pi1').parent().removeClass('open');
			} else {
				$(this).parent().find('ul, .tx-macinasearchbox-pi1').parent().addClass('open');
			}
		});

		
		//Nivoslider ersatz - Da schlanker
		$('.carousel.slide').carousel({
    		interval: 4000 
		});
		

		/* End domReady */
	});
	/* End noConflict */
})($);