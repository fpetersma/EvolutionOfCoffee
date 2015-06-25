// Name: Felix Petersma
// Studentnumber: 10367217
// Project: EvolutionOfCoffee

'use strict';

InitVis();

function InitVis() {
	// constants
	var WIDTH = 1200,
		HEIGHT = 2000;

	// create svg for title
	var title = d3.select('#title').append('svg')
		.attr('id', 'titletext')
		.attr('width', WIDTH)
		.attr('height', 400)
		.append('rect')
			.attr('class', 'background-rect')
			.attr('id', 'titlerect')
			.attr('rx', 30)
			.attr('rx', 30)
			.attr('x', 100)
			.attr('y', 100)
			.attr('width', 1100)
			.attr('height', 200)
			.attr('fill', '#663300')
		.append('text')
			.attr('id', 'sometext')
			.text("The Evolution of Coffee")
			.attr('x', 300)
			.attr('y', 150)
			.style('text-anchor', 'middle')

	// create svg for first wave
	var firstWave = d3.select('#waves').append('svg')
		.attr('id', 'firstwave')
		.attr('class', 'wave')
		.append('rect')
			.attr('class', 'background-rect')

	// create svg for second wave
	var secondWave = d3.select('#waves').append('svg')
		.attr('id', 'secondwave')
		.attr('class', 'wave')
		.append('rect')
			.attr('class', 'background-rect')

	// create svg for third wave
	var thirdWave = d3.select('#waves').append('svg')
		.attr('id', 'thirdwave')
		.attr('class', 'wave')
		.append('rect')
			.attr('class', 'background-rect')
			.attr

	var mainMap = d3.select('#map').append('svg')
		.

}