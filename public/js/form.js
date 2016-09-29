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
  var topicPercentages = topics.map(function(topic) {
    var topicAnswers = answerArray.filter(function(answerObject) {
      return answerObject.topic === topic;
    });
    var trueTopicAnswers = topicAnswers.filter(function(answerObject) {
      return answerObject.answer === true;
    });
    var percentageTrueAnswers = trueTopicAnswers.length / topicAnswers.length;
    var percentageOfDoughnut = percentageTrueAnswers * 100 / 5;
    var rObj = {};
    rObj[topic] = percentageOfDoughnut;
    return rObj;
  }).slice(0,5);
  var currentTopicPercentage = topicPercentages.filter(function(topicObject) {
    return Object.keys(topicObject)[0] === questions[questionNo - 2].topic;
  })
  var valueOfCurrentTopicPercentage = currentTopicPercentage[0][Object.keys(currentTopicPercentage[0])]
  if (questions[questionNo - 2].topic !== questions[questionNo - 1].topic) {
    config.data.labels.push('data #' + config.data.labels.length);
    config.data.datasets[0].data.push(valueOfCurrentTopicPercentage);
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

$('.question-button').click(function(event) {
  incrementSessionQuestionCount();
  var answer = event.target.id === 'question-button-yes'? true : false;
  updateAnswers(answer, questionCount);
  updateDoughnut(questionCount);
  changeTopic(questionCount);
  setCookie(answer, questionCount);
  changeQuestion();
  event.preventDefault();
});

})()
