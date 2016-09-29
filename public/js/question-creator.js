(function() {
  var questionForm = document.getElementsByClassName('questions')[0];
  questions.map(function(questionObject, index) {
    var questionDiv = document.createElement('h2');
    var questionText = document.createTextNode(questionObject.question);
    questionDiv.appendChild(questionText);
    questionDiv.classList.add('question-title');
    if (index > 0) { questionDiv.classList.add('question-hidden') };
    questionDiv.id = (questionObject.question);
    questionForm.appendChild(questionDiv);
  })
})()
