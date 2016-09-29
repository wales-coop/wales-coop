(function() {

function cookieQuestionCount() {
  var completedQuestions = docCookies.keys();
  return completedQuestions.length;
}

var questionCount = cookieQuestionCount() > 0 ? cookieQuestionCount() : 0;

function incrementSessionQuestionCount() {
    questionCount += 1;
}

// add check for cookies here
var answerArray = questions.map(function(questionObject) {
  questionObject.answer = false;
  return questionObject;
})

function updateAnswers(answer, questionNo) {
  answerArray[questionNo - 2].answer = answer;
}

function updateDoughnut(questionNo) {
  // find current topic
  var currentTopic = questions[questionNo - 2].topic;
  // find all the answer objects that match this topic
  var currentTopicAnswers = answerArray.filter(function(answerObject) {
    return answerObject.topic === currentTopic;
  });
  // length of array of current topic answers
  var currentTopicAllLength = currentTopicAnswers.length;
  // length of array of current topic true answers
  var currentTopicTrueLength = currentTopicAnswers.filter(function(answerObject) {
    return answerObject.answer === true;
  }).length;
  // percentage of current topic answered true
  var percentageTrueAnswers = currentTopicTrueLength / currentTopicAllLength;
  // percentage of doughnut it should take up
  var percentageOfDoughnut = percentageTrueAnswers * 100 / topics.length;
  if (questions[questionNo - 2].topic !== questions[questionNo - 1].topic) {
    config.data.labels.push('data #' + config.data.labels.length);
    config.data.datasets[0].data.push(percentageOfDoughnut);
    config.data.datasets[0].backgroundColor.push();
    window.myDoughnut.update();
  }
}

function changeTopic(questionNo) {
  if (questions[questionNo - 2].topic !== questions[questionNo - 1].topic) {
    $('h3.question-section-title').text(questions[questionNo - 1].topic);
    $('div.question-form').switchClass(questions[questionNo - 2].class, questions[questionNo - 1].class, 600);
  }
  if (questions[questionNo - 2].topic === 'Case Studies') {
    $('.question-section-title').css('visibility', 'hidden');
    $('.question-section-hr').css('visibility', 'hidden');
    $('.question-button').hide();
  }
}

function setCookie(answer, questionNo) {
  // check to see if cookie already exists and delete if it does
  docCookies.setItem(questions[questionNo - 2].question, answer);
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

function showDesiredContent() {
  var trueAnswers = answerArray.filter(function(answerObject) {
    return answerObject.answer === true;
  }).map(function(object) {
    return object.question;
  });
  $.each($('.content'), function(index, content){
    var relatedQuestion = contentData.filter(function(contentObject) {
      return contentObject.title === content.id;
    }).map(function(object) {
      return object.question;
    })[0];
    if (trueAnswers.indexOf(relatedQuestion) >= 0) {
      content.setAttribute('style', 'display: block');
    }
  });
}

$('.question-button').click(function(event) {
  incrementSessionQuestionCount();
  var answer = event.target.id === 'question-button-yes'? true : false;
  updateAnswers(answer, questionCount);
  updateDoughnut(questionCount);
  changeTopic(questionCount);
  setCookie(answer, questionCount);
  changeQuestion();
  showDesiredContent();
  event.preventDefault();
});

})()
