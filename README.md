# random-quote-generator
Treehouse Techdegree Project #1 - Random Quote Generator

Project Requirements
====================

## Create an array of JS objects to hold the data for the quotes.
Each quote should have the following properties:
- [x] A `quote` property which contains a string: the text of the quote to display on the page.
- [x] A `source` property which contains a string identifying the creator of the quote.
- [x] An optional `citation` property which contains a string identifying the publication the quote appears in.
- [x] An optional `year` property which contains a number identifying the date of the quote.

## Create a function named `getRandomQuote` which:
- [x] selects a random quote object from the quotes array
- [x] returns the randomly selected quote objects

## Create a function named `printQuote` which follows these rules:
- [x] `printQuote` calls the `getRandomQuote` function and stores the returned quote object in a variable.
- [x] `printQuote` constructs a string using the different properties of the quote object using the following HTML template:

```
<p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>
```
- [x] `printQuote` doesn't add a `<span class="citation">` for a missing citation or a `<span class="year">` if the year property is missing.
- [x] `printQuote` displays the final HTML string to the page. You can use the following JS snippet to accomplish that: `document.getElementById('quote-box').innerHTML`

# Extra Credit

- [x] Add more properties to the quote object. For example, a tags property could include a list of "tags" like -- "humor", "business", "politics" -- to categorize each quote.
- [x] Randomly change the background color of the page, when the quote changes
- [x] Don't display a random quote more than once until ALL quotes from the array have been displayed.
- [x] Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. (You can use the setInterval() or setTimeout() method to do this -- see the links in the Project Resources listing.)

# View Project
[Live Demo](http://re-brand.us/projects/random-quote-generator/index.html) of this project for peer review.