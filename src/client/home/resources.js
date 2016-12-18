/* global $ Materialize */
import resourceTemplate from '../../../views/partials/resource.hbs';
import { resourcesPromise } from './index';

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
    .html(resources
      .filter(resource => resource.topic_id === Number(topic.topicId))
      .map(addSection).join(''),
    );

  Materialize.showStaggeredList('#resources-list');
};

export default (topic) => {
  resourcesPromise.then(showResources(topic));
};
