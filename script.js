// Declaration of variables

var numberofSquares = 6; 
var colors = generateColors(6);
var squares = $(".square");
var rightColor = pickColor(colors);
var resetButton = $("#reset");
var easy = $("#easy");
var hard = $("#hard");
var header = $(".header");



setStage(numberofSquares);



// Events
$(easy).click(function() {
	numberofSquares = 3;
	setStage(numberofSquares);
	$(this).addClass("selected");
	$(hard).removeClass("selected");
})

$(hard).click(function() {
	numberofSquares = 6;
	setStage(numberofSquares);
	$(this).addClass("selected");
	$(easy).removeClass("selected");
})

$(resetButton).click(function() {
	setStage(numberofSquares);
	$(this).text("New Colors");
	$(header).css("background-color", "steelblue");
})

$(".square").click(function() {
	if($(this).css("background-color") === rightColor)
	{
		$("#message").text("Correct");
		$(".square").css("background-color", rightColor);
		$(resetButton).text("Play Again ?");
		$(header).css("background-color", rightColor);

	}
	else
	{
		$("#message").text("Try Agian");
		$(this).css("background-color", "grey");
	}	
})


// Functions

function generateColors(num)
{
	/*
		This function recieves the number of squares
		and return an array of random colors.
	*/

	var colorsArr = [];
	var r;
	var g;
	var b;
	var cssString ;
	for (var i = 0; i < num ; i++)
	{
		r = Math.floor(Math.random()*256);
		g = Math.floor(Math.random()*256);
		b = Math.floor(Math.random()*256);
		cssString = "rgb("+ r + ", " + g + ", " + b + ")";
		colorsArr.push(cssString);
	}
	return colorsArr;
}


function colorSquares() {

	/*
		This function color the squares with the 
		colors generated from generateColors.
	*/
	for (var i = 0; i < 6 ; i++)
	{
		if (colors[i])
		{
			$(squares[i]).css("background-color", colors[i]);
			$(squares[i]).css("display", "block");
		}
		else
		{
			$(squares[i]).css("display", "none");
		}
	}
	$("#test").text(rightColor);
}


function pickColor(arr)
{
	/*
		This function recives the colors array and  chooses and returns
		a random element of this array.
	*/
	return arr[Math.floor(Math.random() * arr.length)];
}




function setStage(num)
{
	/*
		This function recivers the number of the squares
		and generate the colors array, pick a color of them
		as the target and color the squares
	*/
	colors = generateColors(num);
	rightColor = pickColor(colors);
	colorSquares();
}