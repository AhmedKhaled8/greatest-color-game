# The Greatest Color Game

* NOTE: to use it you have to clone the repo on your device and open the HTML file on any browser. Check that the four files are in the same folder. 

* It's a website designed using HTML, CSS and Javascript (jQuery).

* The website is a game in which the coordinates of the rgb of a color is shown and the target is to select the block you think its color is the same color shown above.

* If you are wrong, the chosen block is faded out until you choose the right color.

* There are two levels, EASY shows only three options while HARD shows six options.

## HTML

* The HTML consists of three parts; ```header```, ```nav```, ```container```.
    * ```header``` is the class of the title with the target color.
    * ```nav``` is the class of the buttons; NEW COLORS, EASY, HARD and the result message.
    * ```container``` is the class of the ```square``` blocks.

## CSS

* Here we used a special font called **Montserrat** which you can find it [here](https://fonts.google.com/specimen/Montserrat?selection.family=Montserrat).

## Javascript

* In the javascript file we have four functions

```javascript


function generateColors(num)
{
	/*
		This function recieves the number of squares
		and return an array of random colors.
	*/
}


function colorSquares() {
	/*
		This function color the squares with the 
		colors generated from generateColors.
	*/
}


function pickColor(arr)
{
	/*
		This function recives the colors array and  chooses and returns
		a random element of this array.
	*/
}




function setStage(num)
{
	/*
		This function recivers the number of the squares
		and generate the colors array, pick a color of them
		as the target and color the squares
	*/
}

```

### It's one of my first "mini" projects in my journey in the web development. Hope you like it. :) .
