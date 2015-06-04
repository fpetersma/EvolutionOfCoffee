// Name: Felix Petersma
// Studentnumber: 10367217
// Project: EvolutionOfCoffee

'use strict';

InitVis();

function InitVis() {
	// constants
	var HEIGHT = {smallMap: 120, largeMap: 600},
		WIDTH = {smallMap: 200, largeMap: 1000}

	// create svg for first wave
	var firstWave = d3.select('#first-wave').append('svg')
		.attr('width', 200)
		.attr('height', 120)
		.attr('class', 'wave')

	// create svg for second wave
	var secondWave = d3.select('#second-wave').append('svg')
		.attr('width', 200)
		.attr('height', 120)
		.attr('class', 'wave')

	// create svg for third wave
	var thirdWave = d3.select('#third-wave').append('svg')
		.attr('width', 200)
		.attr('height', 120)
		.attr('class', 'wave')

	// create svg for fourth wave
	var fourthWave = d3.select('#fourth-wave').append('svg')
		.attr('width', 200)
		.attr('height', 120)
		.attr('class', 'wave')

	// create svg for the main map
	var mainMap = d3.select('#map').append('svg')
		.attr('width', 1000)
		.attr('height', 600)
		.attr('class', 'wave')

	// create svg element to put general info
	var generalInfo = d3.select('#information').append('svg')
		.attr('width', 1000)
		.attr('height', 300)
		.append('text')
			.attr('id', 'specific-text')

	var projectionLarge = d3.geo.miller()
	    .scale((WIDTH.largeMap + 1) / 2 / Math.PI)
	    .translate([WIDTH.largeMap / 2, HEIGHT.largeMap / 2])
	    .precision(.1),

		projectionSmall = d3.geo.miller()
	    .scale((WIDTH.smallMap + 1) / 2 / Math.PI)
	    .translate([WIDTH.smallMap / 2, HEIGHT.smallMap / 2])
	    .precision(.1);

	var pathLarge = d3.geo.path()
	    .projection(projectionLarge),

	    pathSmall = d3.geo.path()
	    .projection(projectionSmall);

	var graticule = d3.geo.graticule();

	mainMap.append('path')
	    .datum(graticule)
	    .attr('class', 'graticule')
	    .attr('d', pathLarge);

	// load the json data of the world map
	d3.json('world-50m.json', function(error, world) {
		var countries = topojson.feature(world, world.objects.countries).features;

		// create the main map
		// create the graticule
		mainMap.append('path')
		    .datum(graticule)
		    .attr('class', 'graticule')
		    .attr('d', pathLarge);

		// create the land
	  	// mainMap.insert('path')
	   //  	.datum(topojson.feature(world, world.objects.land))
	   //  	.attr('class', 'land')
	   //  	.attr('d', pathLarge)

	    // create the (inner) boundaries
	  	mainMap.insert('path')
			.datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
			.attr('class', 'boundary')
			.attr('d', pathLarge)

		// create seperate path per country
		mainMap.selectAll('.subunit')
    		.data(countries)
  			.enter().append('path')
    			.attr('class', function(d) { return 'subunit code' + d.id; })
    			.attr('d', pathLarge);

		// create first wave mini map
		firstWave.append('path')
		    .datum(graticule)
		    .attr('class', 'graticule')
		    .attr('d', pathSmall);

		// create seperate path per country
		firstWave.selectAll('.subunit')
    		.data(countries)
  			.enter().append('path')
    			.attr('class', function(d) { return 'subunit code' + d.id; })
    			.attr('d', pathSmall);

	    // create the (inner) boundaries    	
	  	firstWave.insert('path')
			.datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
			.attr('class', 'boundary')
			.attr('d', pathSmall);

		// create second wave mini map
		secondWave.append('path')
		    .datum(graticule)
		    .attr('class', 'graticule')
		    .attr('d', pathSmall);

		// create seperate path per country
		secondWave.selectAll('.subunit')
    		.data(countries)
  			.enter().append('path')
    			.attr('class', function(d) { return 'subunit code' + d.id; })
    			.attr('d', pathSmall);

	    // create the (inner) boundaries
	  	secondWave.insert('path')
			.datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
			.attr('class', 'boundary')
			.attr('d', pathSmall);

		// create third wave mini map
		thirdWave.append('path')
		    .datum(graticule)
		    .attr('class', 'graticule')
		    .attr('d', pathSmall);

		// create seperate path per country
		thirdWave.selectAll('.subunit')
    		.data(countries)
  			.enter().append('path')
    			.attr('class', function(d) { return 'subunit code' + d.id; })
    			.attr('d', pathSmall);

	    // create the (inner) boundaries
	  	thirdWave.insert('path')
			.datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
			.attr('class', 'boundary')
			.attr('d', pathSmall);

		// create fourth wave mini map
		fourthWave.append('path')
		    .datum(graticule)
		    .attr('class', 'graticule')
		    .attr('d', pathSmall);

		// create seperate path per country
		fourthWave.selectAll('.subunit')
    		.data(countries)
  			.enter().append('path')
    			.attr('class', function(d) { return 'subunit code' + d.id; })
    			.attr('d', pathSmall);

	    // create the (inner) boundaries
	  	fourthWave.insert('path')
			.datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
			.attr('class', 'boundary')
			.attr('d', pathSmall);

		// start the interactivity
		firstWave.on('mouseclick')
			



	});
};