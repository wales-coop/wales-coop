(function() {

function returnQuestionCount() {
  var completedQuestions = docCookies.keys();
  return completedQuestions.length;
}

var questionCount = returnQuestionCount() > 0 ? returnQuestionCount() : 0;

function incrementSessionQuestionCount() {
    questionCount += 1;
}

function setCookie(answer, questionNumber) {
  docCookies.setItem("question" + questionNumber, answer);
}

function updateDoughnut(percentage) {
  config.data.labels.push('data #' + config.data.labels.length);
  $.each(config.data.datasets, function(index, dataset) {
      dataset.data.push(percentage);
      dataset.backgroundColor.push();
  });
  window.myDoughnut.update();
}

$('.question-button').click(function(event) {

  var answer = event.target.id === 'question-button-yes'? true : false;

  updateDoughnut(20);
  setCookie(answer, questionCount);

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
  incrementSessionQuestionCount();
  event.preventDefault();
});
})()
