(function() {
  contentData.map(function(content, index) {
    var topicDiv = document.getElementById(content.topic);
    var contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    contentDiv.id = content.title;
    contentDiv.style.display = 'none';
    var anchorElem = document.createElement('a');
    anchorElem.href = content.URL;
    var anchorText = document.createTextNode(content.title);
    anchorElem.appendChild(anchorText);
    contentDiv.appendChild(anchorElem);
    var subtitleElem = document.createElement('p');
    var subtitleText = document.createTextNode(content.subtitle);
    subtitleElem.appendChild(subtitleText);
    contentDiv.appendChild(subtitleElem);
    topicDiv.appendChild(contentDiv);
  })
})()
