(function() {

function CookieQuestionCount() {
  var completedQuestions = docCookies.keys();
  return completedQuestions.length;
}

var questionCount = CookieQuestionCount() > 0 ? CookieQuestionCount() : 0;

function incrementSessionQuestionCount() {
    questionCount += 1;
}

function setCookie(answer, questionNo) {
  // check to see if cookie already exists and delete if it does
  docCookies.setItem(questions[questionNo - 2].question, answer);
}

function updateDoughnut(answer, questionNo) {
  config.data.labels.push('data #' + config.data.labels.length);
  config.data.datasets[0].data.push(20);
  config.data.datasets[0].backgroundColor.push();
  window.myDoughnut.update();
}

function changeTopic(questionNo) {
  if (questions[questionNo - 2].topic !== questions[questionNo - 1].topic) {
    $('h3.question-section-title').text(questions[questionNo - 1].topic);
    //this is just a patch. We will do this by toggling classes
    if ($('.question-form').css('background-color') === 'rgb(231, 43, 55)') {
      $('.question-form').animate({
        backgroundColor: 'rgb(70, 191, 189)'
      }, 600);
    }
    if ($('.question-form').css('background-color') === 'rgb(70, 191, 189)') {
      $('.question-form').animate({
        backgroundColor: 'rgb(231, 43, 55)'
      }, 600);
    }
  }
  // this is still not quite working
  if (questionNo >= questions.length) {
    $('.question-section-title').css('visibility', 'hidden');
    $('.question-section-hr').css('visibility', 'hidden');
    $('.question-form').animate({
      backgroundColor: 'rgb(70, 191, 189)'
    }, 600);
    $('.question-end').toggle('slide', { direction: 'down' }, 600);
  }
}

function changeQuestion() {
  $.each($('.question-title'), function(index, question){
    if ($(question).is(':visible')) {
      $(question).toggle('slide', { direction: 'up' }, 600, function () {
        $(question).next().toggle('slide', { direction: 'down' }, 600);
      });
    }
  });
}

$('.question-button').click(function(event) {
  incrementSessionQuestionCount();
  var answer = event.target.id === 'question-button-yes'? true : false;
  updateDoughnut(answer, questionCount);
  changeTopic(questionCount);
  setCookie(answer, questionCount);
  changeQuestion();
  event.preventDefault();
});

})()
