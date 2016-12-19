/* eslint-disable */
import * as d3 from 'd3';
import _ from 'ramda';
import adminPalette from './admin-palette';

export const randomColor = () => (
  `#${Math.floor(Math.random() * 16)
    .toString(16)}${Math.floor(Math.random() * 16)
    .toString(16)}${Math.floor(Math.random() * 16)
    .toString(16)}`
);

export const colorLibGen = data => data.map((el, i) => Object.assign(el, { color: adminPalette[i] }));

export const drawChart = (formatParam, filterParam) => (data) => {
  data = data.filter(el=> el.text !== '')

  const margin = {
    top: 50,
    right: 20,
    bottom: 50,
    left: Math.floor(5.2*d3.max(data.map(d => d.text.length))),
  };

  const width = parseInt(d3.select('.admin-chart').style('width'), 10) - margin.left - margin.right;
  const height = parseInt(d3.select('.admin-chart').style('height'), 10) - margin.top - margin.bottom;

  const x = d3.scaleLinear()
    .domain([0, d3.max(data.map(d => d.frequency))])
    .range([0, width]);

  const y = d3.scaleBand()
    .domain(data.map(d => d.text))
    .range([height, 0])
    .paddingInner(0.2)
    .paddingOuter(0.5);

  var yAxis = d3.axisLeft(y);

  const svg = d3.select('.admin-chart')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left}, ${margin.top})`);

  const bars = svg.selectAll('.bar')
    .data(data, d => d.text)
    .enter()
    .append('g')
    .attr('class', 'bar')
    .attr('id', d => `admin-bar-${d.id}`)
    .attr('transform', d => `translate(0, ${y(d.text)})`)

  bars
    
  bars
    .append('rect')
    .attr('height', y.bandwidth())
    .attr('width', 0)
    .attr('fill', d => d.color)
    .transition()
    .duration(900)
    .attr('width', d => x(d.frequency))

  bars
    .append('text')
    .attr('fill', 'white')
    .attr('text-anchor', 'end')
    .attr('dy', '0.35em')
    .attr('y', y.bandwidth()/2)
    .attr('x', d => x(d.frequency) - 4)
    .text(el => el.frequency);

  svg.append('g')
    .attr('class', 'y axis')
    .attr('transform', `translate(${width + margin.right}, 0) scale(0, 0)`)
    .call(yAxis)

  svg.select('.y.axis')
    .append('text')
    .attr('transform', 'rotate(0)')
    .attr('x', 250)
    .attr('dx', '0.1em')
    .attr('fill', 'black')
    .style('text-anchor', 'end')
    .text(`${!filterParam ? `${formatParam.toUpperCase()}S: all business types` : `QUESTIONS: ${filterParam} businesses only`}`);

  svg.select('.y.axis')
    .transition()
    .delay(100)
    .duration(800)
    .attr('transform', 'translate(0, 0) scale(1, 1)')



  const tooltip = d3.select('.admin-chart-container')
    .append('div')
    .style('position', 'absolute')
    .style('visibility', 'hidden')
    .style('z-axis', 10)
    .attr('class', 'adminSvg__toolTip');

  svg.selectAll('rect')
    .on('mouseover', el =>
        tooltip
        .text('interested businesses: '+ el.frequency)
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

export default (formatParam, filterParam) => (data) => {
  _.compose(
    drawChart(formatParam, filterParam),
    colorLibGen,
  )(data);
};

