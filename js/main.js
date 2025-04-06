// галерея картинок
(function () {
	$('.gallery-item__img-wrapper').magnificPopup({
		delegate: 'a',
		type: 'image',
		fixedContentPos: true,
		fixedBgPos: true,
		closeBtnInside: false,
		tLoading: 'Загрузка изображения #%curr%...',
		gallery: {
			showCloseBtn: false,
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
			tCounter: '<span class="mfp-counter">%curr% / %total%</span>', // markup of counter
			tPrev: '', // title for left button
			tNext: '', // title for right button
		}
	});
})();

(function () {
	$('.author__gallery-list').magnificPopup({
		delegate: 'a',
		fixedContentPos: true,
		fixedBgPos: true,
		type: 'image',
		tLoading: 'Загрузка изображения #%curr%...',
		closeBtnInside: false,
		gallery: {
			showCloseBtn: false,
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
			tCounter: '<span class="mfp-counter">%curr% / %total%</span>', // markup of counter
			tPrev: '', // title for left button
			tNext: '', // title for right button
		}
	});
})();

// swipe for author
(function() {
  const magnificPopup = $.magnificPopup.instance;

  $("a.author__img-link").click(function(e) {
    setTimeout(function() {
      $(".mfp-container").swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
          magnificPopup.next();
        },

        swipeRight:function(event, direction, distance, duration, fingerCount) {
          magnificPopup.prev();
        },
      });
    }, 500);
  });

}).call(this);

// swipe for galleries
(function() {
  const magnificPopup = $.magnificPopup.instance;

  $("a.gallery-item__img-link").click(function(e) {
    setTimeout(function() {
      $(".mfp-container").swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
          magnificPopup.next();
        },

        swipeRight:function(event, direction, distance, duration, fingerCount) {
          magnificPopup.prev();
        },
      });
    }, 500);
  });

}).call(this);

(function () {
	const nav = document.querySelector('.main-nav');
	const toggle = nav.querySelector('.toggle');
	const currentPage = document.querySelector('.current-page-link');

	nav.classList.remove('main-nav--no-js');

	toggle.addEventListener('click', function () {
		nav.classList.toggle('main-nav--opened');
		currentPage.classList.toggle('hidden');
	});
})();

(function () {
	$(".bio__list-toggle").click(function(e){
		e.preventDefault();
		const secondText = $(".bio__list-toggle-text")[0].getAttribute('data-text');
		const tmp = e.currentTarget.firstElementChild.textContent;
		e.currentTarget.firstElementChild.textContent = e.currentTarget.firstElementChild.getAttribute('data-text');
		e.currentTarget.firstElementChild.dataset.text = tmp;
		if ($(`.bio__list`)[0].style.display === `` || $(`.bio__list`)[0].style.display === `none`) {
			$( ".bio__list" ).slideDown(900);
			$(".bio__list-toggle-text")[0].textContent = secondText;
			$(".fa-chevron-down").addClass('svg-revert');
		} else {
			$( ".bio__list" ).slideUp(900);
			$(".fa-chevron-down").removeClass('svg-revert');
		}
	});
})();


//scroll to top
(function () {
	$('.scrollToTop').hide();
	$(window).scroll(function () {
		if( $(this).scrollTop() > 100 ) {
			$('.scrollToTop').fadeIn(300);
			$('.scrollToTop').addClass('flex-container');
			$('.scrollToTop').removeClass('hidden');
		}
		else {
			$('.scrollToTop').fadeOut(300);
			$('.scrollToTop').addClass('hidden');
			$('.scrollToTop').removeClass('flex-container');
		}
	});

	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop:0}, 500 );
		return false;
	});
})();


