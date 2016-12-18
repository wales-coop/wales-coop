/* global window */
import * as d3 from 'd3';
import getDataset from './chart-helper';
import palette from '../palette';
import loadResources from './resources';

const barPaddingLeft = 2;
let svg;
let margin;
let bar;
let x;
let y;
let width;
let height;
let yAxis;

export const filteredData = state =>
  getDataset(state)
    .map((topic, idx) => ({ ...topic, colour: palette[idx] }))
    .filter(topic => topic.totals.proportion > 0);

const update = (state) => {
  const dataset = filteredData(state);

  d3.select('.progress .determinate')
    .style('width', d3.format('.0%')(state.responses.length / state.questions.length));

  if (!dataset.length) return;

  y.domain(dataset.map(d => d.topic));

  const t = d3.transition()
    .duration(300);

  bar = svg.selectAll('.bar')
    .data(dataset, d => d.topic);

  bar.exit()
    .remove();

  bar
    .transition(t)
    .attr('width', d => x(d.totals.proportion))
    .attr('y', d => y(d.topic))
    .attr('height', y.bandwidth());

  bar.enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('width', () => x(0))
    .attr('x', barPaddingLeft)
    .attr('y', d => y(d.topic))
    .attr('height', y.bandwidth())
    .attr('fill', d => d.colour)
    .transition(t)
    .attr('width', d => x(d.totals.proportion))
    .attr('y', d => y(d.topic))
    .attr('height', y.bandwidth());

  svg.select('.y.axis').remove();

  svg.append('g')
    .attr('class', 'y axis')
    .call(yAxis)
    .append('text')
    .attr('x', barPaddingLeft)
    .attr('dx', '1em')
    .attr('dy', '-1em')
    .style('text-anchor', 'start')
    .style('fill', 'black')
    .text('Areas of interest');
};

export const resize = () => {
  width = parseInt(d3.select('.question-chart').style('width'), 10) - margin.left - margin.right;
  height = parseInt(d3.select('.question-chart').style('height'), 10) - margin.top - margin.bottom;

  x.range([0, width]);
  y.range([height, 0]);

  svg.select('.y.axis')
    .call(yAxis)
    .append('text')
    .attr('transform', 'rotate(0)')
    .attr('x', 50)
    .attr('dx', '0.1em')
    .style('text-anchor', 'end')
    .text('Your interests');

  svg.selectAll('.bar')
    .attr('width', d => x(d.totals.proportion))
    .attr('y', d => y(d.topic))
    .attr('height', y.bandwidth());
};

export const init = (state) => {
  margin = {
    top: 50,
    right: 20,
    bottom: 50,
    left: 250,
  };

  width = parseInt(d3.select('.question-chart').style('width'), 10) - margin.left - margin.right;
  height = parseInt(d3.select('.question-chart').style('height'), 10) - margin.top - margin.bottom;

  x = d3.scaleLinear()
    .range([0, width]);

  y = d3.scaleBand()
    .range([height, 0])
    .paddingInner(0.2)
    .paddingOuter(0.5);

  x.domain([0, 1]);

  yAxis = d3.axisLeft(y);

  svg = d3.select('.question-chart')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  d3.select(window).on('resize', resize);

  update(state);
  resize();
};

export const barBounceOn = function (listenerD, listenerIdx) {
  svg.selectAll('.bar')
    .filter((barD, barIdx) => listenerIdx === barIdx)
    .transition()
    .ease(d3.easeElasticOut)
    .duration('700')
    .attr('width', d => x(d.totals.proportion) - 10)
    .attr('x', barPaddingLeft + 10);
};

export const barBounceOff = function (listenerD, listenerIdx) {
  svg.selectAll('.bar')
    .filter((barD, barIdx) => listenerIdx === barIdx)
    .transition()
    .ease(d3.easeQuadInOut)
    .duration('300')
    .attr('width', d => x(d.totals.proportion))
    .attr('x', barPaddingLeft);
};

export const flashHighlight = function (listenerD, listenerIdx) {
  d3.select('.y.axis').selectAll('.tick')
    .filter((tickD, tickIdx) => listenerIdx === tickIdx)
    .select('.highlight')
    .attr('opacity', '1');

  d3.select('.y.axis').selectAll('.tick')
    .filter((tickD, tickIdx) => listenerIdx === tickIdx)
    .select('text')
    .attr('fill', 'white');
};

export const highlightOff = function (listenerD, listenerIdx) {
  d3.select('.y.axis').selectAll('.tick')
    .filter((tickD, tickIdx) => listenerIdx === tickIdx)
    .select('.highlight')
    .transition()
    .duration('200')
    .attr('opacity', '0');

  d3.select('.y.axis').selectAll('.tick')
    .filter((tickD, tickIdx) => listenerIdx === tickIdx)
    .select('text')
    .transition()
    .duration('200')
    .attr('fill', 'black');
};


export const awaitSelection = (state, resourcesPromise) => {
  const dataset = filteredData(state);
  d3.select('.y.axis').selectAll('.tick')
    .insert('rect', ':first-child')
    .attr('class', 'highlight')
    .attr('width', function () {
      return d3.select(this.parentNode).select('text').node().getBBox().width + 4;
    })
    .attr('height', function () {
      return d3.select(this.parentNode).select('text').node().getBBox().height;
    })
    .attr('x', function () {
      return d3.select(this.parentNode).select('text').node().getBBox().x - 2;
    })
    .attr('y', function () {
      return d3.select(this.parentNode).select('text').node().getBBox().y;
    })
    .attr('fill', (d, i) => dataset[i].colour)
    .attr('opacity', '0');

  const listeners = svg.selectAll('.listener')
    .data(dataset, d => d.topic)
    .enter()
    .append('rect')
    .attr('class', 'listener')
    .attr('width', d => x(d.totals.proportion) + margin.left)
    .attr('x', barPaddingLeft - margin.left)
    .attr('y', d => y(d.topic))
    .attr('height', y.bandwidth())
    .attr('opacity', '0');

  listeners
    .on('mouseover.barbounce', barBounceOn)
    .on('mouseout.barbounce', barBounceOff)
    .on('mouseover.highlight', flashHighlight)
    .on('mouseout.highlight', highlightOff)
    .on('click', loadResources(resourcesPromise));

  return state;
};

export default update;
