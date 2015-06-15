# The Report Document

by: Felix Petersma

## 06.01.2015

- Installed Git and created a GitHub account, created a .gitignore, README.md and LICENSE.md (with MIT-license).
- Started writing the proposal in the README.md.

## 06.02.2015

- Created a IMAGES directory, added the first sketch.
- Continued to work in README.md, finished the proposal. Started working on the content of the visualisation, so the texts that will appear when moving over countries.

## 06.03.2015

- Continued working on the text content in README.md.
- Created eoc.js, eoc.html, eoc_html.css and eoc_svg.css. 
- I'm still doubting on whether I will use bootstrap for the design of my visualisation, for now I will stick to svg and d3. The basic elements have been created, next step is to work out how to get the world maps where I want them, in a way that I can perform transformations and stuff like that. It is gonna be a lot of work. 

## 06.04.2015

Today: 
- I will be working on implementing the maps in the code. 
- I will try to use bootstrap after all, due to its design capabilities
- Decided to go for a sort light brown-ish colour scheme, will probably use colorbrewer2.org to acquire a proper colour scheme

- I have finally managed to implement the maps using topojson. I was a bit of a hassle to create all the different paths for all the different countries, but in the end it all worked out.  The first layout is not completed, and the next step is to start working on the interactivity. The rest of the layout will be dealt with in a later stadium. For now, I decided on leaving the background of the maps transparant, thereby letting them blend into the visualisation. 
- The four main text elements will all be written at the same spot, and I will only make one visible every time it gets clicked. I hope this is going to work. 

## 06.08.2015

- On friday and saturday, I worked mainly on the lay out. I have now almost completely worked out the bootstrap layout. I have changed the background-image and some of the background-colour.
- I have written the main texts on every period, but i cannot manage to get them hidden

- I managed to get the texts hidden and visible using 'display: block/none'!!
- but the d3 selection does not work in javascript, if i run it in the console the texts appear/disappear, but when i click it does not work. 

- first on-mouseover and on-mouseout functions have been implemented: countries now 'light up' when mouseover is detected. what is actually being done, is that the countries get a stroke of the same colour, hence appearing to light up. next step are the pop ups. 

- created the first code concerning the pop up, will continue tomorrow. 

## 06.09.2015

- used http://bl.ocks.org/mbostock/1087001 for the tooltip

## 06.10.2015

- I managed to made the tooltip adjust to the size of the inside text, so the next step is to put all the texts in a dictionary, so that I can load the specific text easily in-code.

- all of the text has been added to the code, and the popups work as I want them to. added the credits, that also worked out perfectly. The next step in the process is to work on the layout and the presentation of all the data, and to decide on whether i should add more different data. also, I will check on the correctness of the data, the information and the grammar. 

06.11.2015

- I have decided not to show statistics on the countries, next to the stories I wrote. Instead, i will use the fourth wave map to show for all the different coffee producing countries. also, today i will rewrite some text. 

- i have created a json file, containing all the coffee producing countries and some information on them. This will be available in the fourth map. 

06.12.2015

- background source = http://pabloandrustys.com.au/images/uploads/PR-sustainability-feature.jpg

- i created a list of all coffee producing countries to use this to loop over the countries from the json file. 

- used http://www.coffeehunter.com/green_coffees/european/bolivia to get the varieties of bolivia, those were missing in the book.

06.15.2015

- at this point, the colours are not really working for me, so i think i will give every country a different colour, all similar colours to the ripe coffeeberries shown in the background image. moreover, for some reason, the showInformationArabPeninsula and clearInfoArabPeninsula fuction are not working properly when called upon inside the on.'mouseover' attribute of ethiopia and yemen. However, if i copy the funtions completely inside the on.'mouseover' attribute, it works perfectly... I need to figure out what is going on here. 
- moreover, i want to change the highlighting on the map; instead of highlighting the mouseover-ed country, i want to make all the other ocuntries lighter grey. love it! Succeeded!!

- managed to get the function working as well, turned out to have anything to do with callbacks and stuff like that, should have known. also managed to flip the popup when reacing the right part of the map, so thats good. will now try to change background colour of the pop up