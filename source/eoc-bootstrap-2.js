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
				 	fourth: 'Coffee has always been a very popular drink, one of the most popular in the world, in fact. What is different now, compared to before, is not just the focus on a very unique cup of coffee; it is also the focus on letting people experience it outside of the usual coffee bars and roasteries, at places such as large events or at home. This change in attitude towards coffee might be the beginning of the fourth wave; a period where it is not just about creating the \'best coffee\', but about exploring all the different flavours that are available, what different roasts do to different coffees, what extraction techniques result in what flavours, and sharing this knowledge with the rest of the world, not just with the hipsters at the coffeebars. For this wave, the map will show something different: for every coffee producing country, information is available on the varieties that are common and what flavour characteristics are unique for the area.' };

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
	var firstWave = d3.select('#first-wave').select('svg')
		.attr('width', WIDTH.smallMap)
		.attr('height', HEIGHT.smallMap)
		.attr('class', 'wave first-wave');

	// create svg for second wave
	var secondWave = d3.select('#second-wave').select('svg')
		.attr('width', WIDTH.smallMap)
		.attr('height', HEIGHT.smallMap)
		.attr('class', 'wave second-wave');

	// create svg for third wave
	var thirdWave = d3.select('#third-wave').select('svg')
		.attr('width', WIDTH.smallMap)
		.attr('height', HEIGHT.smallMap)
		.attr('class', 'wave third-wave');

	// create svg for fourth wave
	var fourthWave = d3.select('#fourth-wave').select('svg')
		.attr('width', WIDTH.smallMap)
		.attr('height', HEIGHT.smallMap)
		.attr('class', 'wave fourth-wave');

	// create svg for the main map
	var mainMap = d3.select('#map').append('svg')
		.attr('width', WIDTH.largeMap)
		.attr('height', HEIGHT.largeMap)
		.attr('class', 'wave map')

	// create svg element to put general info
	var generalInfo = d3.select('#information').append('svg')
		.attr('width', WIDTH.largeMap)
		.attr('height', HEIGHT.largeMap / 2)
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
			d3.select('#info-btn').attr('class', 'btn-lg');
			d3.select('#waves').selectAll('a').style('background-color', null);
			d3.select('#' + wave).select('a').style('background-color', '#eee');
		}

		// when a wave is actually clicked
		firstWave.on('click', function() {
			showForWave('first-wave', '.text-1');
		});
		secondWave.on('click', function() {
			showForWave('second-wave', '.text-2');
		});
		thirdWave.on('click', function() {
			showForWave('third-wave', '.text-3');
		});
		fourthWave.on('click', function() {
			showForWave('fourth-wave', '.text-4');
		});

		// create the div for the tooltip
		var toolTip = d3.select('.container-map').append('div')
			.attr('class', 'tooltip')
			.style('display', 'none')
			.style('max-width', WIDTH.largeMap * 3 / 5 + 'px');

		var mainTextTip = d3.select('.container-map').append('div')
			.attr('class', 'maintexttip')
			.style('display', 'none')
			.style('width', '1000px')
			.style('margin-left', 'auto')
			.style('margin-right', 'auto')
			.style('right', 0)
			.style('left', 0)
			

		// show main-info text as pop up if button is clicked
    	d3.select('#info-btn').on('click', function() {

    		if (mainTextTip.style('display') == 'block') {
    			$('.maintexttip').empty();
    			mainTextTip.style('display', 'none');
    		}

    		else if (mainMap.attr('class') == 'wave first-wave') {
    			mainTextTip.append('p')
    				.text(mainTexts.first);
    			mainTextTip
    				.style('display', 'block');
    		}

    		else if (mainMap.attr('class') == 'wave second-wave') {
    			mainTextTip.append('p')
    				.text(mainTexts.second)
    			mainTextTip
    				.style('display', 'block');
    		}

    		else if (mainMap.attr('class') == 'wave third-wave') {
    			mainTextTip.append('p')
    				.text(mainTexts.third)
    			mainTextTip
    				.style('display', 'block');
    		}

    		else if (mainMap.attr('class') == 'wave fourth-wave') {
    			mainTextTip.append('p')
    				.text(mainTexts.fourth)
    			mainTextTip
    				.style('display', 'block');
    		};
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

		function highlightArea(area, wave) {
			mainMap
				.attr('class', 'wave ' + wave + ' blanco')
			area
				.style('fill', '#8c3500');	
		};

		function showToolTip(header, text) {
			toolTip.append('h4')
					.text(header);
			    toolTip.append('p')
			    	.text(text);
				if (d3.event.pageX >= window.innerWidth / 2) {
					toolTip
						.style('left', (d3.event.pageX) - WIDTH.largeMap * 3 / 5 + 'px');
				}
				else {
					toolTip
						.style('left', (d3.event.pageX) + 'px');
				};
				toolTip
					.style('top', (d3.event.pageY) - 200 + 'px')
					.style('display', 'block');
		}

		// function that colours the country and shows the tooltip
		function showInformation(wave, path, title, textPart) {
			if (mainMap.attr('class') == 'wave ' + wave) {
				highlightArea(path, wave);
				showToolTip(title, textPart);
			};
		};

		// function that clears the map on mouseout
		function clearInformation(wave, path) {
			if (mainMap.attr('class') == 'wave ' + wave + ' blanco') {
				path
					.style('fill', null)
				mainMap
					.attr('class', 'wave ' + wave)

				// remove all elements inside the tooltip
				$('.tooltip').empty();
				toolTip.style('display', 'none');
			};
		};

		// function that colours the country and shows the tooltip for western europe
		function showInformationWesternEurope() {
			if (mainMap.attr('class') == 'wave third-wave') {
				highlightArea(netherlands, 'third-wave');
				highlightArea(belgium, 'third-wave');
				highlightArea(greatBritain, 'third-wave');
				highlightArea(germany, 'third-wave');
				showToolTip('Western Europe', popUpTexts.westernEurope);
			};
		};

		// function that clears the map on mouseout for western europe
		function clearInformationWesternEurope() {
			if (mainMap.attr('class') == 'wave third-wave blanco') {
				mainMap
					.attr('class', 'wave third-wave')

				netherlands.style('fill', null);
				greatBritain.style('fill', null);
				germany.style('fill', null);
				belgium.style('fill', null);

				toolTip.style('display', 'none');
				$('.tooltip').empty();
			};
		};

		// function that colours the country and shows the tooltip for scandinavia
		function showInformationScandinavia() {
			if (mainMap.attr('class') == 'wave third-wave') {
				highlightArea(sweden, 'third-wave');
				highlightArea(norway, 'third-wave');
				highlightArea(finland, 'third-wave');
				highlightArea(denmark, 'third-wave');
				showToolTip('Scandinavia', popUpTexts.scandinavia);
			};
		};

		// function that clears the map on mouseout for scandinavia
		function clearInformationScandinavia() {
			if (mainMap.attr('class') == 'wave third-wave blanco') {
				mainMap
					.attr('class', 'wave third-wave')

				norway.style('fill', null);
				sweden.style('fill', null);
				denmark.style('fill', null);
				finland.style('fill', null);

				toolTip.style('display', 'none');
				$('.tooltip').empty();
			};
		};

		// function that colours the country and shows the tooltip for the arabian peninsula
		function showInformationArabPeninsula() {
			if (mainMap.attr('class') == 'wave first-wave') {
				highlightArea(ethiopia, 'first-wave');
				highlightArea(saoudiArabia, 'first-wave');
				highlightArea(yemen, 'first-wave');
				highlightArea(oman, 'first-wave');
				highlightArea(unitedArabEmirates, 'first-wave');
				showToolTip('Ethiopia and the Arabian Peninsula', popUpTexts.arabPeninsula);
			};
		};

		// function that clears the map on mouseout for the arabian peninsula
		function clearInformationArabPeninsula() {
			if (mainMap.attr('class') == 'wave first-wave blanco') {
				mainMap
					.attr('class', 'wave first-wave');

				ethiopia.style('fill', null);
				saoudiArabia.style('fill', null);
				yemen.style('fill', null);
				oman.style('fill', null);
				unitedArabEmirates.style('fill', null);

				toolTip.style('display', 'none');
				$('.tooltip').empty();
			};
		};

		// import the data for coffee producing countries to add to the fourth wave map
		d3.json('coffee_countries.json', function(error, data) {
			var countries = data['Coffee Producing Countries'];
			coffeeCountries.forEach(function(country) {
				// skip yemen and ethiopia because they will get the .on(mousover) later in the code, skip hawaii due to irrelevance
				if (country != 'Yemen' && country != 'Ethiopia' && country != 'Hawaii') {
					var introduction = countries[country]['Introduction'];
					var tasteProfile = countries[country]['Taste profile'];
					var varieties = countries[country]['Varieties'];
					var production = countries[country]['Number of 60kg bags (2013)'];

					var path = mainMap.select('.code' + countries[country]['Country code']);
					path.on('mouseover', function() {
						if (mainMap.attr('class') == 'wave fourth-wave') {
							highlightArea(path, 'fourth-wave');
							toolTip
								.style('display', 'block');
							toolTip.append('h4')
								.text(country);
							toolTip.append('h5')
								.text('Introduction');
							toolTip.append('p')
								.text(introduction);
							toolTip.append('h5')
								.text('Taste profile');
							toolTip.append('p')
								.text(tasteProfile);
							toolTip.append('h5')
								.text('Varieties');
							toolTip.append('p')
								.text(varieties);
							toolTip.append('h5')
								.text('Production of 60kg bags (2013)');
							toolTip.append('p')
								.text(production);
							if (d3.event.pageX < window.innerWidth / 2) {
								toolTip
									.style('left', (d3.event.pageX) + 'px')
							};
							if (d3.event.pageX >= window.innerWidth / 2) {
								toolTip
									.style('left', (d3.event.pageX) - WIDTH.largeMap * 3 / 5 + 'px')
							};
							toolTip
								.style('top', (d3.event.pageY) - 200 + 'px')
								.style('display', 'block');
						};
					});
					path.on('mouseout', function() {
						clearInformation('fourth-wave', path)
					});
				};
			});

			// on mouseover france
			france.on('mouseover', function() {
				showInformation('first-wave', france, 'France', popUpTexts.france);
			});
			france.on('mouseout', function() {
				clearInformation('first-wave', france);
			});

			// on mouseover united states
			unitedStates.on('mouseover', function() {
				showInformation('second-wave', unitedStates, 'United States', popUpTexts.unitedStatesSecond);
				showInformation('third-wave', unitedStates, 'United States', popUpTexts.unitedStatesThird);
			});
			unitedStates.on('mouseout', function() {
				clearInformation('second-wave', unitedStates);
				clearInformation('third-wave', unitedStates);		
			});

			// on mouseover italy
			italy.on('mouseover', function() {
				showInformation('second-wave', italy, 'Italy', popUpTexts.italy);
			});
			italy.on('mouseout', function() {
				clearInformation('second-wave', italy);
			});

			// on mouseover japan
			japan.on('mouseover', function() {
				showInformation('third-wave', japan, 'Japan', popUpTexts.japan);
			});
			japan.on('mouseout', function() {
				clearInformation('third-wave', japan);	
			});

			// on mouseover australia
			australia.on('mouseover', function() {
				showInformation('third-wave', australia, 'Australia', popUpTexts.australia);
			});
			australia.on('mouseout', function() {
				clearInformation('third-wave', australia);	
			});

			// on mouseover netherlands
			netherlands.on('mouseover', function() {
				showInformationWesternEurope;
				showInformation('first-wave', netherlands, 'The Netherlands', popUpTexts.netherlands);
			});
			netherlands.on('mouseout', function() {
				clearInformationWesternEurope;
				clearInformation('first-wave', netherlands);
			});

			// on mouseover arabian peninsula and ethiopia
			ethiopia.on('mouseover', function() {
				if (mainMap.attr('class') == 'wave fourth-wave') {
					var introduction = countries['Ethiopia']['Introduction'];
					var tasteProfile = countries['Ethiopia']['Taste profile'];
					var varieties = countries['Ethiopia']['Varieties'];
					var production = countries['Ethiopia']['Number of 60kg bags (2013)'];

					highlightArea(ethiopia, 'fourth-wave');
					toolTip.append('h4')
						.text('Ehtiopia');
					toolTip.append('h5')
						.text('Introduction');
					toolTip.append('p')
						.text(introduction);
					toolTip.append('h5')
						.text('Taste profile');
					toolTip.append('p')
						.text(tasteProfile);
					toolTip.append('h5')
						.text('Varieties');
					toolTip.append('p')
						.text(varieties);
					toolTip.append('h5')
						.text('Production of 60kg bags (2013)');
					toolTip.append('p')
						.text(production);
					if (d3.event.pageX < window.innerWidth / 2) {
						toolTip
							.style('left', (d3.event.pageX) + 'px')
					};
					if (d3.event.pageX >= window.innerWidth / 2) {
						toolTip
							.style('left', (d3.event.pageX) - WIDTH.largeMap * 3 / 5 + 'px')
					};
					toolTip
						.style('top', (d3.event.pageY) - 200 + 'px')
						.style('display', 'block');
				};
				showInformationArabPeninsula();
			});
			
			ethiopia.on('mouseout', function() {
				clearInformation('fourth-wave', ethiopia);
				clearInformationArabPeninsula();
			});

			yemen.on('mouseover', function() {
				if (mainMap.attr('class') == 'wave fourth-wave') {
					var tasteProfile = countries['Yemen']['Taste profile'];
					var varieties = countries['Yemen']['Varieties'];
					var production = countries['Yemen']['Number of 60kg bags (2013)'];

					highlightArea(yemen, 'fourth-wave');
					toolTip.append('h4')
						.text('Yemen');
					toolTip.append('h5')
						.text('Taste profile');
					toolTip.append('p')
						.text(tasteProfile);
					toolTip.append('h5')
						.text('Varieties');
					toolTip.append('p')
						.text(varieties);
					toolTip.append('h5')
						.text('Production of 60kg bags (2013)');
					toolTip.append('p')
						.text(production);
					if (d3.event.pageX < window.innerWidth / 2) {
						toolTip
							.style('left', (d3.event.pageX) + 'px')
					};
					if (d3.event.pageX >= window.innerWidth / 2) {
						toolTip
							.style('left', (d3.event.pageX) - WIDTH.largeMap * 3 / 5 + 'px')
					};
					toolTip
						.style('top', (d3.event.pageY) - 200 + 'px')
						.style('display', 'block');
					};
				showInformationArabPeninsula();
			});
			yemen.on('mouseout', function() {
				clearInformation('fourth-wave', yemen);
				clearInformationArabPeninsula();
			});

			saoudiArabia.on('mouseover', showInformationArabPeninsula);
			saoudiArabia.on('mouseout', clearInformationArabPeninsula);

			oman.on('mouseover', showInformationArabPeninsula);
			oman.on('mouseout', clearInformationArabPeninsula);

			unitedArabEmirates.on('mouseover', showInformationArabPeninsula);
			unitedArabEmirates.on('mouseout', clearInformationArabPeninsula);

			// on mouseover scandinavia
			sweden.on('mouseover', showInformationScandinavia);
			sweden.on('mouseout', clearInformationScandinavia);

			norway.on('mouseover', showInformationScandinavia);
			norway.on('mouseout', clearInformationScandinavia);

			denmark.on('mouseover', showInformationScandinavia);
			denmark.on('mouseout', clearInformationScandinavia);

			finland.on('mouseover', showInformationScandinavia);
			finland.on('mouseout', clearInformationScandinavia);

			// on mouseover western europe
			greatBritain.on('mouseover', showInformationWesternEurope);
			greatBritain.on('mouseout', clearInformationWesternEurope);

			germany.on('mouseover', showInformationWesternEurope);
			germany.on('mouseout', clearInformationWesternEurope);

			belgium.on('mouseover', showInformationWesternEurope);
			belgium.on('mouseout', clearInformationWesternEurope);
		});
	});
};
























