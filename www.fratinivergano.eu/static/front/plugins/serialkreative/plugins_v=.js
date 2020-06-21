$(document).ready(function() {
	
	// fancybox
	$(".fancybox").fancybox({
		padding : 0,
		scrollingOutside : false,
		locked : false,
		openEffect : 'fade',
		closeEffect : 'fade'
    });
   
    // boostrap tooltip
    $('*[data-toggle]').tooltip();
	
	// boostrap select
	$('.selectpicker').selectpicker();


});

	// navbar menu open on hover
	const $dropdown = $(".dropdown");
	const $dropdownToggle = $(".dropdown-toggle");
	const $dropdownMenu = $(".dropdown-menu");
	const showClass = "show";
	 
	$(window).on("load resize", function() {
	  if (this.matchMedia("(min-width: 768px)").matches) {
		$dropdown.hover(
		  function() {
			const $this = $(this);
			$this.addClass(showClass);
			$this.find($dropdownToggle).attr("aria-expanded", "true");
			$this.find($dropdownMenu).addClass(showClass);
		  },
		  function() {
			const $this = $(this);
			$this.removeClass(showClass);
			$this.find($dropdownToggle).attr("aria-expanded", "false");
			$this.find($dropdownMenu).removeClass(showClass);
		  }
		);
	  } else {
		$dropdown.off("mouseenter mouseleave");
	  }
	});