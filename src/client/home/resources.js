/* global $ Materialize */
import * as api from '../api/';
import resourceTemplate from '../../../views/partials/resource.hbs';

export const addSection = (resource, idx) => {
  const $html = $(resourceTemplate(resource));
  if (idx === 0) {
    $html.first().addClass('active');
    $html.find('.collapsible-header').addClass('active');
    $html.find('.collapsible-body').css({ display: 'block' });
  }
  return $html.prop('outerHTML');
};

export const showResources = topic => (resources) => {
  $('h4.question-text').slideUp();
  $('.resources-container').fadeOut('fast', () => {
    $('.resources-container h3').text(topic.topic);
    $('.resources-container hr')
      .css({
        borderTop: `1px solid ${topic.colour}`,
        backgroundColor: topic.colour,
        color: topic.colour,
      });
  }).fadeIn('fast');

  $('#resources-list')
    .html(resources.map(addSection).join(''));

  Materialize.showStaggeredList('#resources-list');
};

export default (topic) => {
  console.log(topic);
  api.getResources(topic.topicId).then(showResources(topic));
};
