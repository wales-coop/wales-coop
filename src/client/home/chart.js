/* global window */
import * as d3 from 'd3';
import getDataset from './chart-helper';

let svg;
let margin;
let bar;
let x;
let y;
let width;
let height;
let yAxis;

export const filteredData = state =>
  getDataset(state).filter(topic => topic.totals.proportion > 0);

const update = (state) => {
  const dataset = filteredData(state);
  if (!dataset.length) return;

  y.domain(dataset.map(d => d.topic));

  svg.select('.y.axis').remove();

  svg.append('g')
    .attr('class', 'y axis')
    .call(yAxis)
    .append('text')
    .attr('x', 50)
    .attr('dx', '.1em')
    .attr('dy', '-1em')
    .style('text-anchor', 'end')
    .style('fill', 'black')
    .text('Areas of interest');

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
    .attr('y', d => y(d.topic))
    .attr('height', y.bandwidth())
    .transition(t)
    .attr('width', d => x(d.totals.proportion))
    .attr('y', d => y(d.topic))
    .attr('height', y.bandwidth());
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

export default update;
