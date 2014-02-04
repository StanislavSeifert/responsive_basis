/* noConflict compatible */
(function($) {
	/* domReady */
	$(function() {
		var moreButton = $(".toggle-box");
		var windowsize = $(window).width();
		var count_rows = $("section.row").length;

		// Row Fluid - Equal Box Height
		if (windowsize >= 750) {
			for(var i = 0; i < count_rows; i++){ // Vergleicht immer nur die Höhe der Columns pro .row - Ansonsten hätten alle col´s Global die höhe der Höchten col auf der ganzen Seite
				var equalHeightSelect = $("section.row:nth(" + i + ") > div:not(.nivoslider) > div");
				var equalHeightContentBoxes = equalHeightSelect.find(".row > div > div");
				// Content Grid
				equalHeightContentBoxes.equalHeights();
				// First Level Grid
				equalHeightSelect.equalHeights();

			}
		}

		$( window ).resize(function() {
			windowsize = $(window).width();

			// Reset der von jqueryHeight gesetzten Höhen zu "height = auto" -> Um beim Resize-Event auf Basis des benötigten Platzes weiter zu rechnen.
			// Nicht auf Basis des letzt berechneten Wertes
			$("section.row > div > div").css("height","auto").find(".row > div > div").css("height","auto");
			// Row Fluid - Equal Box Height
			if (windowsize >= 750) {
				for(var i = 0; i < count_rows; i++){  // Vergleicht immer nur die Höhe der Columns pro .row - Ansonsten hätten alle col´s Global die höhe der Höchten col auf der ganzen Seite
					var equalHeightSelect = $("section.row:nth(" + i + ") > div:not(.nivoslider) > div");
					var equalHeightContentBoxes = equalHeightSelect.find(".row > div > div");
					// Content Grid
					equalHeightContentBoxes.equalHeights();
					// First Level Grid
					equalHeightSelect.equalHeights();
				}
			}else{
				var autoHeightSelect = $("section.row > div > div");
				autoHeightSelect.css("height","auto");
				autoHeightSelect.find(".row > div > div").css("height","auto");
			}

		});

		// Smartphone resolution > 768
		// Toggle Boxes
		moreButton.prepend("<span class='icon'>&nbsp;</span>");
		moreButton.click(function(){
		if (windowsize < 768) {

				if ($(this).height() > 35) {
					$(this).css("height", "2.1rem");
					$(this).find(".icon").css("transform", "none");
				} else {
					$(this).css("height", "auto");
					$(this).find(".icon").css("transform", "rotate(90deg)");
				}
			}
		});

		// Mobile Menu
		var mobile_menu = $('.mobile_menu');
		mobile_menu.find('ul.first > li.hassub > a').click(function() {
			if ($(this).hasClass('links_act')) { // close
				$(this).removeClass().addClass('links_no').parent().removeClass('act');
			} else { // open
				// close all other subsubmenus
				mobile_menu.find('ul.first > li.hassub > ul > li > a.links_no2, ul.first > li.hassub > ul > li > a.links_act2').removeClass().addClass('links_no2').parent().removeClass('act');
				mobile_menu.find('ul.first > li').removeClass('act').find('.links_act').removeClass().addClass('links_no');
				$(this).parent().addClass('act').find('.links_no').removeClass().addClass('links_act');
			}
			return false;
		});

		mobile_menu.find('ul.first > li.hassub > ul > li.hassub > a.links_no2, ul.first > li.hassub > ul > li.hassub > a.links_act2').click(function() {
			if ($(this).hasClass('links_act2')) { // close
				$(this).removeClass().addClass('links_no2').parent().removeClass('act');
			} else { // open
				mobile_menu.find('ul.first > li > ul > li').removeClass('act').find('.links_act2').removeClass().addClass('links_no2');
				$(this).parent().addClass('act').find('.links_no2').removeClass().addClass('links_act2');
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

		//Nivoslider
		jQuery(document).ready(function() {
			jQuery('.tx-imagecycle-pi3').show();
		});
		jQuery(window).load(function() {
			jQuery('.nivoSlider img').removeAttr("height").removeAttr("width");
			jQuery('.nivoSlider').nivoSlider({
				effect: 'fade',
				prevText: '',
				nextText: '',
				slices: 15,
				boxCols: 8,
				boxRows: 4,
				animSpeed: 340,
				pauseTime: 5500,
				captionOpacity: '0.8',
				directionNav: true,
				directionNavHide: true,
				controlNav: false,
				keyboardNav: true,
				pauseOnHover: false,
				manualAdvance: false
			});
		});

		/* End domReady */
	});
	/* End noConflict */
})($);