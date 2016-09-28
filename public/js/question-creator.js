(function() {
  var questionForm = document.getElementsByClassName('questions')[0];
  console.log(questionForm);
  questions.map(function(questionObject) {
    var questionDiv = document.createElement('h2');
    var questionText = document.createTextNode(questionObject.question);
    questionDiv.appendChild(questionText);
    questionDiv.classList.add('question-title');
    questionDiv.classList.add('question-hidden');
    questionDiv.id = (questionObject.question);
    questionForm.appendChild(questionDiv);
  })
})()
