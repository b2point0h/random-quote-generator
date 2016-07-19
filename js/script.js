// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
var message = '';
var randomQuote;
var red;
var green;
var blue;
var randomColor;
var viewedQuotes =[];

//Array to hold quotes, sources, citaitons & years
var quotes = [
	{
		quote: "The only thing to fear is fear itself.",
		source: "Franklin Delano Roosevelt",
		citation: "First Inaugural Address",
		year: 1932,
		tags: "Business"
	},
	{
		quote: "That's one small step for man, one giant leap for mankind.",
		source: "Neil Armstrong",
		citation: "The moon",
		year: 1969,
		tags: "Space Travel",
	},
	{
		quote: "It always seems impossible until it is done.",
		source: "Nelson Mandela",
		citation: "",
		year: "1918 - 2013",
		tags: "Politics",
	},
	{
		quote: "Not everything that can be counted counts, and not everything that counts can be counted.",
		source: "Albert Einstein",
		citation: "",
		year: "1879 - 1955",
		tags: "Engineering",
	},
	{
		quote: "What we think, we become",
		source: "Buddha",
		citation: "",
		year: "",
		tags: "Faith",
	},
	{
		quote: "Dream big and dare to fail",
		source: "Norman Vaughan",
		citation: "",
		year: "1905 - 2005",
		tags: "Business",
	},
];

function print(quote) {
	var outputDiv = document.getElementById('quote-box');
	outputDiv.innerHTML = quote;
}
// Function to get a random object from quotes array and store in variable randomQuote
function getRandomQuote() {
	var randomQuote = Math.floor(Math.random() * quotes.length);
	
	var splicedQuote = quotes.splice(randomQuote, 1)[0];
	viewedQuotes.push(splicedQuote);
	if ( quotes.length == 0 ) {
		quotes = viewedQuotes;
		viewedQuotes = [];
	}
	return splicedQuote;
};

//Function to genereate random rgb color value
function randomColorGenerator() {
	red = Math.floor(Math.random() * 256 );
	green = Math.floor(Math.random() * 256 );
	blue = Math.floor(Math.random() * 256 );
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

function autoRotate() {
	// Rotate the quote every 5 seconds
	var rotate = setInterval(printQuote, 5000);
}

// Function to take previously selected random object from array & print to screen
function printQuote() {
	// On click event, function printQuote runs, then fires the getRandomQuote function
	var quotes = getRandomQuote();
	quote ='<p class="quote">' + quotes.quote + '</p>';
	quote  += '<p class="source">' + quotes.source;
	if ( quotes.citation ) {
		quote += '<span class="citation">' + quotes.citation + '</span>';
	} else {
		quote += '';
	};
	if (quotes.year) {
		quote += '<span class="year">' + quotes.year + '</span></p>';	
	} else {
		quote += '';
	}
	if ( quotes.tags ) {
		quote += '<h3>' + quotes.tags + '</h3>';
	} else {
		quote += '';
	}
	print(quote);
	//Generate random color
	randomColorGenerator();
	//Update background with new random color
	document.getElementById('bgcolor').style.backgroundColor = randomColor;
};