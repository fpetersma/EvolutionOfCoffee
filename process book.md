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