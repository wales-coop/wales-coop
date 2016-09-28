$('.question-button').click(function(event) {
  event.preventDefault();
  if ($('.question-1').is(':visible')) {
    $('.question-1').toggle('slide', 1000, function () {
      $('.question-2').toggle('slide', 1000);
    });
    return;
  }
  if ($('.question-2').is(':visible')) {
    $('.question-2').toggle('slide', 1000, function () {
      $('.question-3').toggle('slide', 1000);
    });
    return;
  }
  if ($('.question-3').is(':visible')) {
    $('.question-3').toggle('slide', 1000, function () {
      $('.question-4').toggle('slide', 1000);
    });
    return;
  }
  if ($('.question-4').is(':visible')) {
    $('.question-4').toggle('slide', 1000, function () {
      $('.question-5').toggle('slide', 1000);
    });
    return;
  }
  if ($('.question-5').is(':visible')) {
    $('.question-5').toggle('slide', 1000, function () {
      $('.question-6').toggle('slide', 1000);
    });
    return;
  }
  if ($('.question-6').is(':visible')) {
    $('.question-6').toggle('slide', 1000, function () {
      $('.question-7').toggle('slide', 1000);
    });
    return;
  }
  if ($('.question-7').is(':visible')) {
    $('.question-7').toggle('slide', 1000, function () {
      $('.question-8').toggle('slide', 1000);
    });
    return;
  }
  if ($('.question-8').is(':visible')) {
    $('.question-8').toggle('slide', 1000, function () {
      $('.question-9').toggle('slide', 1000);
    });
    return;
  }
  if ($('.question-9').is(':visible')) {
    $('.question-9').toggle('slide', 1000, function () {
      $('.question-10').toggle('slide', 1000);
    });
    return;
  }
  if ($('.question-10').is(':visible')) {
    $('.question-10').toggle('slide', 1000, function () {
      $('.question-11').toggle('slide', 1000);
    });
    return;
  }
  if ($('.question-11').is(':visible')) {
    $('.question-11').toggle('slide', 1000, function () {
      $('.question-12').toggle('slide', 1000);
    });
    return;
  }
  if ($('.question-12').is(':visible')) {
    $('.question-12').toggle('slide', 1000, function () {
      $('.question-13').toggle('slide', 1000);
    });
    return;
  }
  if ($('.question-13').is(':visible')) {
    $('.question-13').toggle('slide', 1000, function () {
      $('.question-14').toggle('slide', 1000);
    });
    return;
  }
  if ($('.question-14').is(':visible')) {
    $('.question-14').toggle('slide', 1000, function () {
      $('.question-button').toggle();
      $('.question-end').toggle('slide', 1000);
    });
    return;
  }
});
