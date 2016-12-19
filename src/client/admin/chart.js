/* eslint-disable */
import * as d3 from 'd3';

import _ from 'ramda';
import constants from './constants';
import adminPalette from './admin-palette';

export const randomColor = () => (
  `#${Math.floor(Math.random() * 16)
    .toString(16)}${Math.floor(Math.random() * 16)
    .toString(16)}${Math.floor(Math.random() * 16)
    .toString(16)}`
);

export const colorLibGen = data => data.map((el, i) => Object.assign(el, { color: adminPalette[i] }));

export const drawChart = (data) => {
  data = data.filter(el=> el.text !== '')
  const xx = d3.scaleBand()

  const x = d3.scaleLinear()
    .domain([0, d3.max(data.map(el => el.frequency))])
    .range([0, constants.range]);

  const y = d3.scaleBand()
    .range([data.length * constants.rectHeigth, 0])

  var yAxis = d3.axisLeft(y)
    .tickFormat('')
    .tickSize(0)

  const svg = d3.select('.chart')
    .append('svg')// create an <svg> element
    .attr('class', 'adminSvg')
    .attr('width', constants.width)
    .attr('height', constants.height);

  var yAxisGroup = d3.select('.adminSvg') 
    .append('g')
    .transition()
    .duration(900)
    .attr("transform","translate(" + 260 + "," + 50 + ")")
    .attr('margin-left', 10)
    .call(yAxis);

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
    .attr('x', 0)
    .attr('fill', el => el.color)
    .transition()
    .duration(900)
    .attr('width', el => x(el.frequency))
    .attr("transform", "translate(" + 261 + "," + 50 + ")");

  svg.selectAll('g')
    .append('text')
    .attr('fill', 'white')
    .attr('y', (el, i) => (50+(constants.rectHeigth * (i + 1)) - (constants.barHeight / 2)))
    .attr('x', el => (240 + x(el.frequency)))
    .text(el => el.frequency);


  const tooltip = d3.select('.chart')
    .append('div')
    .style('position', 'absolute')
    .style('visibility', 'hidden')
    .style('z-axis', 10)
    .attr('class', 'adminSvg__toolTip');

  bars.append("text")
    .attr("class", "label")
    .attr("x", () =>  500)
    .attr("y", () => 75)
    .text((d) =>  d.text)
    .attr("font-size", "10px")
    .transition()
    .duration(900)
    .attr("transform", (el,i)=> ("translate("+ -500 + "," + constants.rectHeigth * i + ")"))

  svg.selectAll('rect')
    .on('mouseover', el =>
      tooltip
        .text('number of businesses that answered yes: '+ el.frequency)
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

export default (data) => {
  _.compose(
    drawChart,
    colorLibGen,
  )(data);
};

