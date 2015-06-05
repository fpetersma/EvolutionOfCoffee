// Name: Felix Petersma
// Studentnumber: 10367217
// Project: EvolutionOfCoffee

'use strict';

/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

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

	var graticule = d3.geo.graticule();

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

		// when clicking first wave
		firstWave.on('click', function() {
			mainMap.attr('class', 'wave first-wave')
			d3.select('#generalInfo').text(mainTexts.first)
		});

		// when clicking second wave
		secondWave.on('click', function() {
			mainMap.attr('class', 'wave second-wave')
		});

		// when clicking third wave
		thirdWave.on('click', function() {
			mainMap.attr('class', 'wave third-wave')
		});

		// when click fourth wave
		fourthWave.on('click', function() {
			mainMap.attr('class', 'wave fourth-wave')
		});
	});
};