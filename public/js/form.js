//(function () {
var questionCount;
init();

function incrementSessionQuestionCount() {
  if (questionCount < 13) {
    questionCount += 1;
  }
}

var answerArray = questions.map(function(questionObject) {
  questionObject.answer = false;
  return questionObject;
})

function updateAnswers(answer, questionNo) {
  answerArray[questionNo - 1].answer = answer;
}

function updateDoughnut(questionNo) {
  var currentTopic = questions[questionNo - 1].topic;
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
  // fraction of current topic answered true
  var proportionTrueAnswers = currentTopicTrueLength / currentTopicAllLength;
  // percentage of doughnut it should take up
  var percentageOfDoughnut = proportionTrueAnswers * 100 / topics.length;
  if (questions[questionNo - 1].topic !== questions[questionNo].topic) {
    if ($('.doughnut-placeholder').is(':visible')) {
      $('.doughnut-placeholder').toggle('slide', { direction: 'up' }, 600);
    };
    config.data.datasets[0].data.push(percentageOfDoughnut);
    config.data.datasets[0].backgroundColor.push();
    window.myDoughnut.update();
  }
}

function init(){
  questionCount = 0;
  $('h3.question-section-title').text(questions[0].topic);
  $('div.question-form').addClass(questions[0].class);
}
function changeTopic(questionNo) {
  if (questions[questionNo - 1].topic !== questions[questionNo].topic) {
    $('h3.question-section-title').text(questions[questionNo].topic);
    $('div.question-form').switchClass(questions[questionNo - 1].class, questions[questionNo].class, 600);
  }
  if (questions[questionNo - 1].topic === 'Case Studies') {
    $('.question-section-wrapper').css('visibility', 'hidden');
    $('.question-button').hide();
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

function enableButtons() {
  $.each($('.question-button'), function(index, button) {
    $(button).removeAttr("disabled");
  });
}

function disableButtons() {
  $.each($('.question-button'), function(index, button) {
    $(button).attr("disabled", true);
    if (questionCount < 13) {
      setTimeout(function(){
        enableButtons();
      }, 1000);
    }
  });
}

$('.question-button').click(function(event) {
  event.preventDefault();
  disableButtons();
  incrementSessionQuestionCount();
  var answer = event.target.id === 'question-button-yes'? true : false;
  updateAnswers(answer, questionCount);
  updateDoughnut(questionCount);
  changeTopic(questionCount);
  changeQuestion();
  showDesiredContent();
});
//})();
