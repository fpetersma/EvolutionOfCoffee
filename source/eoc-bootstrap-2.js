// Name: Felix Petersma
// Studentnumber: 10367217
// Project: EvolutionOfCoffee

'use strict';

InitVis();

function InitVis() {
	// constants
	var HEIGHT = {smallMap: 120, largeMap: 600},
		WIDTH = {smallMap: 200, largeMap: 1000};

	var mainTexts = {first: 'Long, long ago, in the far-away Ethiopian highlands, there lived a goatherd. His name was Kaldi, and one day he noticed his dancing and being unable to sleep at night after eating the berries from a certain plant. Kaldi told the abbot at the local monastery about his findings, and the abbot and the other monks started exploring this unique berry and its effects. Although this story is just a myth and can not be confirmed, coffee does originate from Ethiopia.',
				 	second: 'After the discovery of the coffee in Ethiopia and it being cultived all over the world, coffee was almost indispensable in the daily routine of many people around the world. The coffee houses were places were people met to talk about all sorts of things, from day-to-day stuff to important strategic decisions. And although there were differences, almost all coffee made using a filtering technique; the roasted beans were grinded and the coffee was extracted using hot water. Espresso started growing in popularity around the world from around 1950, thereby ushering the second wave of coffee.',
				 	third: 'Initialised by Starbucks around 1990, more and more companies started direct-trading with farmers to ensure the highest possible quality of the coffee and to find and create particular flavours. People started focussing on the origin of a coffee, how it was processed, what region it was from and what variety it was. Coffee was no longer only being traded on a single Coffea Arabica market for a single price; over 40 different varietes have already been discovered, and still new varietiens are discovered or created, all with their own unique charactaristics. With all this focus for detail about the bean and the processes that were involved, also came a new interest in extraction methods. Espresso, although still by far the most sold coffee in coffeehouses today, was not the only way to make coffee anymore. New techniques were discovered and old ones were being used again. The new focus on \'filter coffees\' also let to new ways of roasting; where, in general, an espresso roast is pretty dark, in order bring out the sweetness and bitterness in coffee (the high pressure of an espresso machine increase the level of acidity in coffee, so this needs to be balanced out), a filter coffee roast could be lighter, fruitier and greener. Most filter methods do not use any form of pressure, thus leading to a calmer extraction, and very little distorted flavours.',
				 	fourth: 'Back to the future...' }

	// create svg for first wave
	var firstWave = d3.select('#first-wave').append('svg')
		.attr('width', WIDTH.smallMap)
		.attr('height', HEIGHT.smallMap)
		.attr('class', 'wave first-wave')

	// create svg for second wave
	var secondWave = d3.select('#second-wave').append('svg')
		.attr('width', WIDTH.smallMap)
		.attr('height', HEIGHT.smallMap)
		.attr('class', 'wave second-wave')

	// create svg for third wave
	var thirdWave = d3.select('#third-wave').append('svg')
		.attr('width', WIDTH.smallMap)
		.attr('height', HEIGHT.smallMap)
		.attr('class', 'wave third-wave')

	// create svg for fourth wave
	var fourthWave = d3.select('#fourth-wave').append('svg')
		.attr('width', WIDTH.smallMap)
		.attr('height', HEIGHT.smallMap)
		.attr('class', 'wave fourth-wave')

	// create svg for the main map
	var mainMap = d3.select('#map').append('svg')
		.attr('width', WIDTH.largeMap)
		.attr('height', HEIGHT.largeMap)
		.attr('class', 'wave map')

	// create svg element to put general info
	var generalInfo = d3.select('#information').append('svg')
		.attr('width', 1000)
		.attr('height', 300)
		.append('p')
			.attr('class', 'main-text')

	var projectionLarge = d3.geo.robinson()
	    .scale((WIDTH.largeMap + 1) / 2 / Math.PI)
	    .translate([WIDTH.largeMap / 2, HEIGHT.largeMap / 2])
	    .precision(.1),

		projectionSmall = d3.geo.robinson()
	    .scale((WIDTH.smallMap + 1) / 2 / Math.PI)
	    .translate([WIDTH.smallMap / 2, HEIGHT.smallMap / 2])
	    .precision(.1);

	var pathLarge = d3.geo.path()
	    .projection(projectionLarge),

	    pathSmall = d3.geo.path()
	    .projection(projectionSmall);

	var toolTip = mainMap.append('div')
		.attr('class', 'tooltip')
		.style('opacity', 0.8)
		.style('display', 'none');

	var graticule = d3.geo.graticule();

	// variable for the main information on the period
	var mainInfo = d3.selectAll('.main-info');

	// load the json data of the world map
	d3.json('world-50m.json', function(error, world) {
		var countries = topojson.feature(world, world.objects.countries).features;

		// create the main map
		// create the graticule
		mainMap.append('path')
		    .datum(graticule)
		    .attr('class', 'graticule')
		    .attr('d', pathLarge);

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

		// when clicking first wave
		firstWave.on('click', function() {
			mainMap.attr('class', 'wave first-wave');
			mainInfo.style('display', 'none');
			d3.select('.text-1').style('display', 'block');
		});

		// when clicking second wave
		secondWave.on('click', function() {
			mainMap.attr('class', 'wave second-wave')
			mainInfo.style('display', 'none');
			d3.select('.text-2').style('display', 'block');	
		});

		// when clicking third wave
		thirdWave.on('click', function() {
			mainMap.attr('class', 'wave third-wave')
			mainInfo.style('display', 'none');
			d3.select('.text-3').style('display', 'block');
		});

		// when click fourth wave
		fourthWave.on('click', function() {
			mainMap.attr('class', 'wave fourth-wave')
			mainInfo.style('display', 'none');
			d3.select('.text-4').style('display', 'block');
		});

		// selection paths to all the countries
		var france = mainMap.select('.code250'),
			netherlands = mainMap.select('.code528'),
			dutchColonies = mainMap.select('.code360'),
			ethiopia = mainMap.select('.code231'),
			saoudiArabia = mainMap.select('.code682'),
			unitedArabEmirates = mainMap.select('.code784'),
			oman = mainMap.select('.code512'),
			yemen = mainMap.select('.code887'),

			unitedStates = mainMap.select('.code840'),
			italy = mainMap.select('.code380'),

			japan = mainMap.select('.code392'),
			norway = mainMap.select('.code578'),
			finland = mainMap.select('.code246'),
			sweden = mainMap.select('.code752'),
			denmark = mainMap.select('.code208'),
			greatBritain = mainMap.select('.code826'),
			belgium = mainMap.select('.code56'),
			germany = mainMap.select('.code276'),
			australia = mainMap.selectAll('.code36');
			

		// do something on mouseover france
		france.on('mouseover', function() {
			if (mainMap.attr('class') == 'wave first-wave') {
				france
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
				toolTip
					.style('visibility', 'block')
			};
		});
		france.on('mouseout', function() {
			france.style('stroke', null);
		});

		// do something on mouseover united states
		unitedStates.on('mouseover', function() {
			if (mainMap.attr('class') == 'wave second-wave') {
				unitedStates
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
			};
			if (mainMap.attr('class') == 'wave third-wave') {
				unitedStates
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
			}
		});
		unitedStates.on('mouseout', function() {
			unitedStates.style('stroke', null);
		});

		// do something on mouseover italy
		italy.on('mouseover', function() {
			if (mainMap.attr('class') == 'wave second-wave') {
				italy
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
			};
		});
		italy.on('mouseout', function() {
			italy.style('stroke', null);
		});

		// do something on mouseover japan
		japan.on('mouseover', function() {
			if (mainMap.attr('class') == 'wave third-wave') {
				japan
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
			};
		});
		japan.on('mouseout', function() {
			japan.style('stroke', null);
		});

		// do something on mouseover australia
		australia.on('mouseover', function() {
			if (mainMap.attr('class') == 'wave third-wave') {
				australia
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
			};
		});
		australia.on('mouseout', function() {
			australia.style('stroke', null);
		});

		// functions for moving over arabian peninsula
		function colourArabPeninsula() {
			if (mainMap.attr('class') == 'wave first-wave') {
				ethiopia
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
				yemen
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
				saoudiArabia
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
				oman
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
				unitedArabEmirates
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
			};
		}
		function resetArabPeninsula() {
			ethiopia.style('stroke', null);
			yemen.style('stroke', null);
			saoudiArabia.style('stroke', null);
			oman.style('stroke', null);
			unitedArabEmirates.style('stroke', null);

		}

		// do something on mouseover arabian peninsula and ethiopia
		ethiopia.on('mouseover', colourArabPeninsula);
		ethiopia.on('mouseout', resetArabPeninsula);

		yemen.on('mouseover', colourArabPeninsula);
		yemen.on('mouseout', resetArabPeninsula);

		saoudiArabia.on('mouseover', colourArabPeninsula);
		saoudiArabia.on('mouseout', resetArabPeninsula);

		oman.on('mouseover', colourArabPeninsula);
		oman.on('mouseout', resetArabPeninsula);

		unitedArabEmirates.on('mouseover', colourArabPeninsula);
		unitedArabEmirates.on('mouseout', resetArabPeninsula);

		// function for moving over scandinavia
		function colourScandinavia() {
			if (mainMap.attr('class') == 'wave third-wave') {
				sweden
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
				norway
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
				denmark
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
				finland
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
			};
		}
		function resetScandinavia() {
			norway.style('stroke', null);
			sweden.style('stroke', null);
			denmark.style('stroke', null);
			finland.style('stroke', null);
		}

		// do something on mouseover scandinavia
		sweden.on('mouseover', colourScandinavia);
		sweden.on('mouseout', resetScandinavia);

		norway.on('mouseover', colourScandinavia);
		norway.on('mouseout', resetScandinavia);

		denmark.on('mouseover', colourScandinavia);
		denmark.on('mouseout', resetScandinavia);

		finland.on('mouseover', colourScandinavia);
		finland.on('mouseout', resetScandinavia);

		// function for moving over western europe
		function colourWesternEurope() {
			if (mainMap.attr('class') == 'wave third-wave') {
				netherlands
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
				germany
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
				belgium
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
				greatBritain
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
			};
		};

		function resetWesternEurope() {
			netherlands.style('stroke', null);
			greatBritain.style('stroke', null);
			germany.style('stroke', null);
			belgium.style('stroke', null);
		};


		// do something on mouseover western europe
		netherlands.on('mouseover', function() {
			colourWesternEurope;
			if (mainMap.attr('class') == 'wave first-wave') {
				netherlands
					.style('stroke', '#8c510a')
					.style('stroke-width', '2px');
				toolTip
					.style('visibility', 'block');
			};
		});
		netherlands.on('mouseout', resetWesternEurope);

		greatBritain.on('mouseover', colourWesternEurope);
		greatBritain.on('mouseout', resetWesternEurope);

		germany.on('mouseover', colourWesternEurope);
		germany.on('mouseout', resetWesternEurope);

		belgium.on('mouseover', colourWesternEurope);
		belgium.on('mouseout', resetWesternEurope);
	});
};
























