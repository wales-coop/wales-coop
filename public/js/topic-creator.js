(function() {
  var contentHolder = document.getElementById('content-holder');
  topics.map(function(topic, index) {
    var topicDiv = document.createElement('div');
    topicDiv.className = 'topic';
    topicDiv.id = topic;
    var headerElem = document.createElement('h2');
    var headerText = document.createTextNode(topic);
    headerElem.appendChild(headerText);
    topicDiv.appendChild(headerElem);
    contentHolder.appendChild(topicDiv);
  })
})()
