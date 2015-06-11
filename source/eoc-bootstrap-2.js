// Name: Felix Petersma
// Studentnumber: 10367217
// Project: EvolutionOfCoffee

'use strict';

InitVis();

function InitVis() {
	// constants
	var HEIGHT = {smallMap: 120, largeMap: 600},
		WIDTH = {smallMap: 200, largeMap: 1000};

	// pieces of text that will be used to show as main information on the selected 'wave'
	var mainTexts = {first: 'Long, long ago, in the far-away Ethiopian highlands, there lived a goatherd. His name was Kaldi, and one day he noticed his dancing and being unable to sleep at night after eating the berries from a certain plant. Kaldi told the abbot at the local monastery about his findings, and the abbot and the other monks started exploring this unique berry and its effects. Although this story is just a myth and can not be confirmed, coffee does originate from Ethiopia.',
				 	second: 'After the discovery of the coffee in Ethiopia and it being cultived all over the world, coffee was almost indispensable in the daily routine of many people around the world. The coffee houses were places were people met to talk about all sorts of things, from day-to-day stuff to important strategic decisions. And although there were differences, almost all coffee made using a filtering technique; the roasted beans were grinded and the coffee was extracted using hot water. Espresso started growing in popularity around the world from around 1950, thereby ushering the second wave of coffee.',
				 	third: 'Initialised by Starbucks around 1990, more and more companies started direct-trading with farmers to ensure the highest possible quality of the coffee and to find and create particular flavours. People started focussing on the origin of a coffee, how it was processed, what region it was from and what variety it was. Coffee was no longer only being traded on a single Coffea Arabica market for a single price; over 40 different varietes have already been discovered, and still new varietiens are discovered or created, all with their own unique charactaristics. With all this focus for detail about the bean and the processes that were involved, also came a new interest in extraction methods. Espresso, although still by far the most sold coffee in coffeehouses today, was not the only way to make coffee anymore. New techniques were discovered and old ones were being used again. The new focus on \'filter coffees\' also let to new ways of roasting; where, in general, an espresso roast is pretty dark, in order bring out the sweetness and bitterness in coffee (the high pressure of an espresso machine increase the level of acidity in coffee, so this needs to be balanced out), a filter coffee roast could be lighter, fruitier and greener. Most filter methods do not use any form of pressure, thus leading to a calmer extraction, and very little distorted flavours.',
				 	fourth: 'Back to the future...' };

	// pieces of text that will be used to put in the toolTip on mouseover a specific country
	var popUpTexts = {netherlands: 'Because the Arabs only sold roasted beans, the Netherlands, among other European countries, were not able to cultivate coffee themselves. This monopoly came to an end when a trader from the Dutch East Indian Company, Pieter van der Broecke, managed to \'obtain\' (some sources say \'steal\') some coffee plants from Yemen in 1616. These plants grew so well in the Amsterdam Botanical Gardens, that in 1658 the first \'Coffea Arabica\' was being cultivated in Ceylon(Sri Lanka) and not much later also in other Dutch colonies, such as India, Java (Indonesia) and Suriname. ',
					 france: 'Although the Dutch were the first to cultivate coffee outside of the Arabian Peninsula, the French were the ones who exported it to biggest coffee-producing country in the world, Brazil. Back in 1714, the Mayor of Amsterdam gave King Louise XIV of France a coffee plant, as a present to grow in the Paris Royal Botanical Gardens. Some of the seeds of this plant were taken by Gabriel de Clieu in 1723 and brought to Martinique, one of the French colonies at that time. Most of the coffee that is being grown in Middle and Southern America today originates from those seeds. ',
					 arabPeninsula: 'After its discovery in Ethiopia, the Arabs were the first to cultivate and trade coffee. This was around 14th century, and for next couple of hundred years, the Arabs held a monopoly on coffeetrade. In the 15th century it was mainly grown in the Yemeni district of Arabia, but by the 16th century coffee was being drunk in Persia, Turkey, Egypt and Syria. This also led to the creation of the first coffee houses, of which the first one was reported to be located at Constantinopel in 1475, and was called \'Kiva Han\'.',
					 italy: 'An espresso was made with a different technique. A small amount of water was pushed through coffeegrounds. This technique was first patented by Angelo Moriono in Turin in 1884, and the espresso machine has been perfected ever after. Espresso was a very popular drink, not just because the drink itself, but also because the variations that came with it, such as the cappuccino, which is an espresso with foamed milk. This version was particulary popular outside of Italy itself, mainly in Gread Britain. In Italy, espresso was a beverage for the working-class, and the price of a single espresso, if you were standing at the bar while drinking it, was being regulated by the government, and thus keeping it very, very affordable.',
					 unitedStatesSecond: 'Although espresso was already known in the United States, it wasn\'t a well known drink until the 1990\'s. From 1820 until then, coffee had been the most popular drink in the United States, but nobody had given much care to the production of it. As long as it had a lot of caffeine in it and kept you awake, it did not really matter how it tasted. There even was instant-coffee (not just in the United States, most coffee drinkers around the world did not care much for the flavour or origin of coffee). All of this changed when Howard Schultz came to Starbucks in 1982. Howard Schultz, inspired by the Italian espresso culture, introduced espresso and lots of different espresso-based drinks. The success this has brought Starbucks has been immense, quickly conquering the US and most of Western Europe. Starbucks also introduced something important; they were the first who started direct-trading with the farmers at a global scale. Instead of buying their coffee on world market for coffee, they started paying more for a certain variation of coffee, grown at a specific farm in a specific region of a specific country, and working together with the farmers to create, in their eyes, a perfect coffeebean.',
					 westernEurope: 'A very experimental coffee culture, similar to the Scandinavian culture. Some people use more Australian roasts, some use more Scandinavian roasts, although the main trend lies more towards the lighter, Nordic roasts. The coffee culture is in a very developed stadium here. Every (major) city has lots of coffeehouses, and there are different kind of places for different needs; from small roasteries with a unique single origin from Rwanda to large chains such as Starbucks. There is a huge focus on quality and consistency; there are places, mainly in London, where they weight every shot of espresso (in and out) that they make.',
					 scandinavia: 'All of Scandinavia has been very active in the third coffee wave. Typical for the \'Scandinavian\' or \'Nordic\' roast is that it is in general a very light roast, were filtercoffee beans are barely being roasted after the \'the first crack\'. This is the moment in the roasting process where the first gasses escape from beans, thereby causing them to, quite literally, crack. ',
					 japan: 'Although Japan\'s coffee culture has existed since a Dutch man brought it to Nagasaki in the 19th century, it did not really boom until the 1970\'s. Since then, it has grown explosively, with lots of coffeehouses being opened. Too of the biggest players in the filter coffee market, Hario and Kalita, originate from Japan. ',
					 unitedStatesThird: 'Although Starbucks was, and still is, by far the biggest player in the specialty coffee, they did remain focussed on espresso-based coffees, especially the flavoured and frozen specials, instead of also joining the renewed interest in filter coffees. This left room for smaller business to fill this market, of which some by now have grown to chains themselves, such as Intelligentsia Coffee in Chicago and Blue Bottle Coffee in Oakland. Typical for the American coffee culture are the large pots or tanks of filtercoffee from which you can pull your own cup of coffee, and the usually very large sizes. Also, in 1982, the Specialty Coffee Association of America was founded, and they were the first to create a grading scheme to decide on whether a particular coffee was a \'specialty coffee\'.',
					 australia: 'Australia is the country were they \'invented\' the flat white; an espresso-based beverage, similar to latte, but with less milk, thus having a espresso-to-milk ratio somewhere between a latte and a cortado. Where the American coffee culture focuses on large amounts of coffee, the Australian coffee culture focusses on single, smaller cups of coffee, making one coffee at the time. In this way this culture is similar to the European culture, although the Australians tend to using darker roasts, especially compared to Scaninavia.'};

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

	// variable for the main information on the period
	var mainInfo = d3.selectAll('.main-info');

	// load the json data of the world map
	d3.json('world-50m.json', function(error, world) {
		var countries = topojson.feature(world, world.objects.countries).features;

  		// function to draw a map 
    	function createMap(map, path) {
    		map.append('path')
    			.datum(graticule)
			    .attr('class', 'graticule')
			    .attr('d', path);

			map.selectAll('.subunit')
    			.data(countries)
  				.enter().append('path')
    				.attr('class', function(d) { return 'subunit code' + d.id; })
    				.attr('d', path);

    		map.insert('path')
				.datum(topojson.mesh(world, world.objects.countries, function(a, b) { return a !== b; }))
				.attr('class', 'boundary')
				.attr('d', path);
    	};

    	// create the maps
    	createMap(firstWave, pathSmall);
    	createMap(secondWave, pathSmall);
    	createMap(thirdWave, pathSmall);
    	createMap(fourthWave, pathSmall);
    	createMap(mainMap, pathLarge);

		// start the interactivity

		// create function for when a wave is selected
		function showForWave(wave, text) {
			mainMap.attr('class', 'wave ' + wave);
			mainInfo.style('display', 'none');
			d3.select(text).style('display', 'block');
		}

		// when a wave is actually clicked
		firstWave.on('click', function() {
			showForWave('first-wave', '.text-1')
		});
		secondWave.on('click', function() {
			showForWave('second-wave', '.text-2')
		});
		thirdWave.on('click', function() {
			showForWave('third-wave', '.text-3')
		});
		fourthWave.on('click', function() {
			showForWave('fourth-wave', '.text-4')
		});

		// create the div for the tooltip
		var toolTip = d3.select('.container-map').append('div')
			.attr('class', 'tooltip')
			.style('display', 'none')

		var toolTipText = toolTip.append('p');

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

		function highlightArea(area) {
			area
				.style('stroke', '#8b3500')
				.style('stroke-width', '1.5px');		
		}

		// do something on mouseover france
		france.on('mouseover', function() {
			if (mainMap.attr('class') == 'wave first-wave') {
				highlightArea(france);
				toolTip
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px")
					.style('display', 'block');
				toolTipText.text(popUpTexts.france);
			};
		});
		france.on('mouseout', function() {
			france.style('stroke', null);
			toolTip.style('display', 'none')
		});

		// do something on mouseover united states
		unitedStates.on('mouseover', function() {
			if (mainMap.attr('class') == 'wave second-wave') {
				highlightArea(unitedStates)
				// show tooltip
				toolTip
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px")
					.style('display', 'block');
			    toolTipText.text(popUpTexts.unitedStatesSecond);
			};
			if (mainMap.attr('class') == 'wave third-wave') {
				highlightArea(unitedStates)
				// show tooltip
				toolTip
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px")
					.style('display', 'block');
			    toolTipText.text(popUpTexts.unitedStatesThird);
			}
		});
		unitedStates.on('mouseout', function() {
			unitedStates.style('stroke', null);
			toolTip.style('display', 'none')
			toolTip.style('display', 'none');
		});

		// do something on mouseover italy
		italy.on('mouseover', function() {
			if (mainMap.attr('class') == 'wave second-wave') {
				highlightArea(italy)
				// show tooltip
				toolTip
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px")
					.style('display', 'block');
			    toolTipText.text(popUpTexts.italy);
			};
		});
		italy.on('mouseout', function() {
			italy.style('stroke', null);
			toolTip.style('display', 'none');
		});

		// do something on mouseover japan
		japan.on('mouseover', function() {
			if (mainMap.attr('class') == 'wave third-wave') {
				highlightArea(japan)
				// show tooltip
				toolTip
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px")
					.style('display', 'block');
			    toolTipText.text(popUpTexts.japan);
			};
		});
		japan.on('mouseout', function() {
			japan.style('stroke', null);
			toolTip.style('display', 'none');
		});

		// do something on mouseover australia
		australia.on('mouseover', function() {
			if (mainMap.attr('class') == 'wave third-wave') {
				highlightArea(australia)
				// show tooltip
				toolTip
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px")
					.style('display', 'block');
			    toolTipText.text(popUpTexts.australia);
			};
		});
		australia.on('mouseout', function() {
			australia.style('stroke', null);
			toolTip.style('display', 'none');
		});

		// functions for moving over arabian peninsula
		function colourArabPeninsula() {
			if (mainMap.attr('class') == 'wave first-wave') {
				highlightArea(ethiopia);
				highlightArea(saoudiArabia);
				highlightArea(yemen);
				highlightArea(oman);
				highlightArea(unitedArabEmirates);
				// show toolTip
				toolTip
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px")
					.style('display', 'block');
			    toolTipText.text(popUpTexts.arabPeninsula);
			};
		}
		function resetArabPeninsula() {
			ethiopia.style('stroke', null);
			yemen.style('stroke', null);
			saoudiArabia.style('stroke', null);
			oman.style('stroke', null);
			unitedArabEmirates.style('stroke', null);

			toolTip.style('display', 'none');
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
				highlightArea(sweden);
				highlightArea(norway);
				highlightArea(finland);
				highlightArea(denmark);
				// show tooltip
				toolTip
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px")
					.style('display', 'block');
			    toolTipText.text(popUpTexts.scandinavia);

			};
		}
		function resetScandinavia() {
			norway.style('stroke', null);
			sweden.style('stroke', null);
			denmark.style('stroke', null);
			finland.style('stroke', null);

			toolTip.style('display', 'none');
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
				highlightArea(netherlands);
				highlightArea(belgium);
				highlightArea(greatBritain);
				highlightArea(germany);
				// show tooltip
				toolTip
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px")
					.style('display', 'block');
			    toolTipText.text(popUpTexts.westernEurope);
			};
		};

		function resetWesternEurope() {
			netherlands.style('stroke', null);
			greatBritain.style('stroke', null);
			germany.style('stroke', null);
			belgium.style('stroke', null);

			toolTip.style('display', 'none');
		};


		// do something on mouseover western europe
		netherlands.on('mouseover', function() {
			colourWesternEurope;
			if (mainMap.attr('class') == 'wave first-wave') {
				highlightArea(netherlands);
				toolTip
					.style("left", (d3.event.pageX) + "px")
					.style("top", (d3.event.pageY) + "px")
					.style('display', 'block');
			    toolTipText.text(popUpTexts.netherlands);
			};
		});
		netherlands.on('mouseout', resetWesternEurope);

		greatBritain.on('mouseover', colourWesternEurope);
		greatBritain.on('mouseout', resetWesternEurope);

		germany.on('mouseover', colourWesternEurope);
		germany.on('mouseout', resetWesternEurope);

		belgium.on('mouseover', colourWesternEurope);
		belgium.on('mouseout', resetWesternEurope);

		// var coffeeProducingCountries = ['Burundi']

		// import the data for coffee producing countries to add to the fourth wave map (not functional yet)
		d3.json('coffee_countries.json', function(error, data) {
			console.log(data['Coffee Producing Countries'])
			data['Coffee Producing Countries'].forEach(function(d) {
				console.log(d.Burundi);
			})
		});
	});
};
























