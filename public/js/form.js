console.log("working");

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
      $('.question-button').toggle();
      $('.question-end').toggle('slide', 1000);
    });
    return;
  }
});
