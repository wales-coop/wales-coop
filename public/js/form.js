$('.question-button').click(function(event) {
  $.each($('.question-title'), function(index, question ){
    if ($(question).is(':visible')) {
      $(question).toggle('slide', { direction: 'up' }, 600, function () {
        $(question).next().toggle('slide', { direction: 'down' }, 600);
      });
    }
  });
  event.preventDefault();
  // }
  // if ($('.question-1-title').is(':visible')) {
  //   $('.question-1-title').toggle('slide', { direction: 'up' }, 600, function () {
  //     $('.question-2-title').toggle('slide', { direction: 'down' }, 600);
  //     $('.question-form').animate({
  //       backgroundColor: '#46BFBD'
  //     }, 600);
  //     $('h3.question-section-title').text('Starting a Social Enterprise');
  //   });
  //   return;
  // }
  // if ($('.question-2-title').is(':visible')) {
  //   $('.question-2-title').toggle('slide', { direction: 'up' }, 600, function () {
  //     $('.question-3-title').toggle('slide', { direction: 'down' }, 600);
  //   });
  //   return;
  // }
  // if ($('.question-3-title').is(':visible')) {
  //   $('.question-3-title').toggle('slide', { direction: 'up' }, 600, function () {
  //     $('.question-4-title').toggle('slide', { direction: 'down' }, 600);
  //   });
  //   return;
  // }
  // if ($('.question-4-title').is(':visible')) {
  //   $('.question-4-title').toggle('slide', { direction: 'up' }, 600, function () {
  //     $('.question-5-title').toggle('slide', { direction: 'down' }, 600);
  //   });
  //   return;
  // }
  // if ($('.question-5-title').is(':visible')) {
  //   $('.question-5-title').toggle('slide', { direction: 'up' }, 600, function () {
  //     $('.question-6-title').toggle('slide', { direction: 'down' }, 600);
  //     $('.question-form').animate({
  //       backgroundColor: '#E72B37'
  //     }, 600);
  //     $('h3.question-section-title').text('Running a Social Enterprise');
  //   });
  //   return;
  // }
  // if ($('.question-6-title').is(':visible')) {
  //   $('.question-6-title').toggle('slide', { direction: 'up' }, 600, function () {
  //     $('.question-7-title').toggle('slide', { direction: 'down' }, 600);
  //   });
  //   return;
  // }
  // if ($('.question-7-title').is(':visible')) {
  //   $('.question-7-title').toggle('slide', { direction: 'up' }, 600, function () {
  //     $('.question-8-title').toggle('slide', { direction: 'down' }, 600);
  //   });
  //   return;
  // }
  // if ($('.question-8-title').is(':visible')) {
  //   $('.question-8-title').toggle('slide', { direction: 'up' }, 600, function () {
  //     $('.question-9-title').toggle('slide', { direction: 'down' }, 600);
  //     $('.question-form').animate({
  //       backgroundColor: '#46BFBD'
  //     }, 600);
  //     $('h3.question-section-title').text('Growing a Social Enterprise');
  //   });
  //   return;
  // }
  // if ($('.question-9-title').is(':visible')) {
  //   $('.question-9-title').toggle('slide', { direction: 'up' }, 600, function () {
  //     $('.question-10-title').toggle('slide', { direction: 'down' }, 600);
  //   });
  //   return;
  // }
  // if ($('.question-10-title').is(':visible')) {
  //   $('.question-10-title').toggle('slide', { direction: 'up' }, 600, function () {
  //     $('.question-11-title').toggle('slide', { direction: 'down' }, 600);
  //   });
  //   return;
  // }
  // if ($('.question-11-title').is(':visible')) {
  //   $('.question-11-title').toggle('slide', { direction: 'up' }, 600, function () {
  //     $('.question-12-title').toggle('slide', { direction: 'down' }, 600);
  //   });
  //   return;
  // }
  // if ($('.question-12-title').is(':visible')) {
  //   $('.question-12-title').toggle('slide', { direction: 'up' }, 600, function () {
  //     $('.question-13-title').toggle('slide', { direction: 'down' }, 600);
  //   });
  //   return;
  // }
  // if ($('.question-13-title').is(':visible')) {
  //   $('.question-13-title').toggle('slide', { direction: 'up' }, 600, function () {
  //     $('.question-14-title').toggle('slide', { direction: 'down' }, 600);
  //     $('.question-form').animate({
  //       backgroundColor: '#E72B37'
  //     }, 600);
  //     $('h3.question-section-title').text('Case Studies');
  //   });
  //   return;
  // }
  // if ($('.question-14-title').is(':visible')) {
  //   $('.question-14-title').toggle('slide', { direction: 'up' }, 600, function () {
  //     $('.question-section-title').css('visibility', 'hidden');
  //     $('.question-section-hr').css('visibility', 'hidden');
  //     $('.question-button').hide();
  //     $('.question-form').animate({
  //       backgroundColor: '#46BFBD'
  //     }, 600);
  //     $('.question-end').toggle('slide', { direction: 'down' }, 600);
  //   });
  //   return;
});
