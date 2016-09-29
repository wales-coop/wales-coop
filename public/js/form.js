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
  var questionArray = questions.map(function(questionObject){
    return questionObject.question;
  });
  docCookies.setItem(questionArray[questionNumber], answer);
}

function updateDoughnut(percentage) {
  config.data.labels.push('data #' + config.data.labels.length);
  $.each(config.data.datasets, function(index, dataset) {
      dataset.data.push(percentage);
      dataset.backgroundColor.push();
  });
  window.myDoughnut.update();
}

function changeTopic(questionNo) {
  var topicArray = questions.map(function(questionObject){
    return questionObject.topic;
  });
  var currentTopic = $('h3.question-section-title').text();
  if (currentTopic !== topicArray[questionNo + 1]) {
    $('h3.question-section-title').text(topicArray[questionNo + 1]);
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
  if (questionNo >= topicArray.length) {
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
      changeTopic(index);
    }
  });
}

$('.question-button').click(function(event) {
  var answer = event.target.id === 'question-button-yes'? true : false;
  updateDoughnut(20);
  setCookie(answer, questionCount);
  changeQuestion();
  incrementSessionQuestionCount();
  event.preventDefault();
});

})()
