$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
  
    return elementBottom > viewportTop && elementTop < viewportBottom;
};
  
$(window).on('resize scroll', function() {
  $('.container').each(function() {
      var activeContainer = $(this).attr('id');
      if ($(this).isInViewport()) {
          $('fixed-'+ activeContainer).addClass("active");
      } else {
          $('fixed-' + activeContainer).removeClass("active");
    }
  });
});
