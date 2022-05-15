$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }
})

const btn = document.querySelector('.btn');
		btn.onmousemove = function(e){
			const x = e.pageX - btn.offsetLeft;
			const y = e.pageY - btn.offsetTop;

			btn.style.setProperty('--x', x + 'px');
			btn.style.setProperty('--y', y + 'px');
		}