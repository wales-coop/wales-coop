$('.question-button').click(function(event) {
  $.each($('.question-title'), function(index, question){
    if ($(question).is(':visible')) {
      $(question).toggle('slide', { direction: 'up' }, 600, function () {
        $(question).next().toggle('slide', { direction: 'down' }, 600);
      });
      if (index === 0) {
        $('.question-form').animate({
          backgroundColor: '#46BFBD'
        }, 600);
        $('h3.question-section-title').text('Starting a Social Enterprise');
      }
      if (index === 4) {
        $('.question-form').animate({
          backgroundColor: '#E72B37'
        }, 600);
        $('h3.question-section-title').text('Running a Social Enterprise');
      }
      if (index === 7) {
        $('.question-form').animate({
          backgroundColor: '#46BFBD'
        }, 600);
        $('h3.question-section-title').text('Growing a Social Enterprise');
      }
      if (index === 12) {
        $('.question-form').animate({
          backgroundColor: '#E72B37'
        }, 600);
        $('h3.question-section-title').text('Case Studies');
      }
      if (index === 13) {
        $('.question-section-title').css('visibility', 'hidden');
        $('.question-section-hr').css('visibility', 'hidden');
        $('.question-form').animate({
          backgroundColor: '#46BFBD'
        }, 600);
        $('.question-end').toggle('slide', { direction: 'down' }, 600);
      }
    }
  });
  event.preventDefault();
});
