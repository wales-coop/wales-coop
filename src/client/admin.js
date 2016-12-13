import * as d3 from 'd3';

export default () => {
  // eslint-disable-next-line no-use-before-define
  // const compose = (...functr) => inVal => functr.reverse().reduce((acc, fn) => fn(acc), inVal);

  const randomColor = () => (
    `#${Math.floor(Math.random() * 16).toString(16)}${Math.floor(Math.random() * 16).toString(16)}${Math.floor(Math.random() * 16).toString(16)}`
  );

  const colorLibGen = data => data.map(el => Object.assign(el, { color: randomColor() }));

  let data = [
    { id: 'q1', frequency: 79, text: 'Have you started your social enterprise?' },
    { id: 'q2', frequency: 100, text: 'Do you have an engaged group of people?' },
    { id: 'q3', frequency: 200, text: 'Have you formed a legal structure?' },
    { id: 'q5', frequency: 125, text: 'Are you bidding for contracts or seeking funding?' },
    { id: 'q7', frequency: 400, text: 'Are you employing staff?' },
    { id: 'q9', frequency: 300, text: 'Are you confident in your organisations governance?' },
  ];

  const dims = {
    rectHeigth: 35,
    barHeight: 30,
    height: 400,
    width: 500,
    range: 500,
  };

  data = colorLibGen(data);

  const x = d3.scaleLinear()
    .domain([0, d3.max(data.map(el => el.frequency))])
    .range([0, dims.range]);

  const svg = d3.select('.chart')
    .append('svg')// create an <svg> element
    .attr('width', dims.width)
    .attr('height', dims.height);

  const bars = svg.selectAll('g')
    .data(data)
    .enter();

  bars
    .append('g')
    .attr('position', 'relative')
    .attr('id', el => el.id)
    .append('rect')
    .attr('z-index', -1)
    .attr('height', dims.barHeight)
    .attr('y', (el, i) => dims.rectHeigth * i)
    .attr('fill', el => el.color)
    .transition()
    .duration(900)
    .attr('width', el => x(el.frequency));

  svg.selectAll('g')
    .append('text')
    .attr('fill', 'white')
    .attr('y', (el, i) => (dims.rectHeigth * (i + 1)) - (dims.barHeight / 2))
    .attr('x', el => x(el.frequency) - 30)
    .text(el => el.frequency);


  const tooltip = d3.select('.chart')
    .append('div')
    .style('position', 'absolute')
    .style('visibility', 'hidden')
    .style('z-axis', 10)
    .attr('class', 'toolTip');

  svg.selectAll('rect')
    .on('mouseover', (el) => {
      tooltip.text(el.text);
      tooltip.style('visibility', 'visible');
    })
    .on('mousemove', () => {
      tooltip.style('top', `${(d3.event.pageY - 10)}px`).style('left', `${(d3.event.pageX + 10)}px`);
    })
    .on('mouseout', () => {
      tooltip.style('visibility', 'hidden');
    });
};
