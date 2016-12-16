import * as d3 from 'd3';
import constants from './constants';

export const randomColor = () => (
  `#${Math.floor(Math.random() * 16)
    .toString(16)}${Math.floor(Math.random() * 16)
    .toString(16)}${Math.floor(Math.random() * 16)
    .toString(16)}`
);

export const colorLibGen = data => data.map(el => Object.assign(el, { color: randomColor() }));

export default (data) => {
  const x = d3.scaleLinear()
    .domain([0, d3.max(data.map(el => el.frequency))])
    .range([0, constants.range]);

  const svg = d3.select('.chart')
    .append('svg')// create an <svg> element
    .attr('class', 'svg')
    .attr('width', constants.width)
    .attr('height', constants.height);

  const bars = svg.selectAll('g')
    .data(data)
    .enter();

  bars
    .append('g')
    .attr('position', 'relative')
    .attr('id', el => el.id)
    .append('rect')
    .attr('z-index', -1)
    .attr('height', constants.barHeight)
    .attr('y', (el, i) => constants.rectHeigth * i)
    .attr('fill', el => el.color)
    .transition()
    .duration(900)
    .attr('width', el => x(el.frequency));

  svg.selectAll('g')
    .append('text')
    .attr('fill', 'white')
    .attr('y', (el, i) => (constants.rectHeigth * (i + 1)) - (constants.barHeight / 2))
    .attr('x', el => x(el.frequency) - 30)
    .text(el => el.frequency);


  const tooltip = d3.select('.chart')
    .append('div')
    .style('position', 'absolute')
    .style('visibility', 'hidden')
    .style('z-axis', 10)
    .attr('class', 'toolTip');

  svg.selectAll('rect')
    .on('mouseover', el =>
      tooltip
        .text(el.text)
        .style('visibility', 'visible'),
       )
    .on('mousemove', () =>
      tooltip
        .style('top', `${(d3.event.pageY - 10)}px`)
        .style('left', `${(d3.event.pageX + 10)}px`),
       )
    .on('mouseout', () =>
      tooltip
        .style('visibility', 'hidden'),
       );
};

