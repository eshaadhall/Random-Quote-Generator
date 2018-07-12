// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//document.getElementById("myList").addEventListener("onchange", selTags, false);
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
//document.getElementById('loadQuote').addEventListener("click", clearInterval(), false);
document.body.addEventListener("click", random_color, false);

// An Array of JavaScript objects to hold the data for quotes
// Array is named quotes
// The quotes array is accessible in the global space, means it is not inside a function
var quotes = [{
                 quote: "Those who dare to fail miserably can achieve greatly",
                 source: "John F. Kenneddy",
                 citation: "Fake Anoynymous Jokes",
                 year: 1989,
                 tags: "Inspirational",
              },
              {
                 quote: "You can do anything but not everything",
                 source: "David Allen",
                 citation:"Making It All Work",
                 year: 2009,
                 tags: "Inspirational",
                },
              {
                quote: "Don't cry because it's over, smile because it happened.",
                source: "Dr. Seuss",
                citation: "",
                year:"" ,
                tags: "Inspirational",
                },
              {
                quote: "If you set your goals ridiculously high and it’s a failure, you will fail above everyone else’s success.",
                source: "James Cameron",
                citation: "Fake Anoynymous Jokes",
                year: 1988,
                tags: "Inspirational",
                },
            {
                quote: "Finality is not the language of politics. ",
                source: "Benjamin Disraeli",
                citation: "Speech in the House of Commons",
                year: 1859,
                tags: "Politics",
              },
              {
                 quote: "Those who dare to fail miserably can achieve greatly",
                 source: "John F. Kenneddy",
                 citation: "Fake Anoynymous Jokes",
                 year: 1989,
                 tags: "Politics",
               },
            {
                 quote: "Patriotism is in political life what faith is in religion. ",
                 source: "Lord Acton",
                 citation: "The Home and Foreign Review",
                 year: 1862,
                 tags: "Politics",
               },
             {
                  quote: "Politics is the art of making the people believe that they are in power, when in fact, they have none.",
                  source: "Mumia Abu-Jamal",
                  citation: "WikiQuotes",
                  year: 2008,
                  tags: "Politics",
                },
              {
                  quote: "“In Hollywood if you don't have a shrink, people think you're crazy.” ",
                  source: "Johnny Carson",
                  citation: "GoodReads",
                  year: "",
                  tags: "Hollywood",
                },
              {
                  quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
                  source: "Marilyn Monroe",
                  citation: "GoodReads",
                  year: 1960,
                  tags: "Hollywood",
                },
              {
                  quote: "Great men are not born great, they grow great.",
                  source: "Don Corleone",
                  citation: "The Godfather",
                  year: 1891,
                  tags: "Hollywood",
                 },
              {
                  quote: "May the force be with you.",
                  source: "Star Wars",
                  citation: "",
                  year: 1977,
                  tags: "Hollywood",
                },
    ];

//function getRandomQuote= selects and returns a random quote object from the quotes array.
function getRandomQuote(){
 var random_number =  Math.floor(Math.random()*12);//always returns between 0 and 5 (5 is exclusive)
 return quotes[random_number];
}


//function printQuote calls the getRandomQuote function and stores the returned quote object in a variable//
function printQuote(){
  random_color();
  var tag = selTags();
  var random_quote = getRandomQuote();
  //combining the strings containing the different properties of the quote obj using the HTML Template
 if(random_quote.tags==tag){
  var message= '<p class="quote">'+random_quote.quote;
  message += '</p> <p class="source">'+random_quote.source;
  // Adds citation to the HTML only if the quote obj has the citation property
    if(random_quote.citation != null){
    message += '<span class="citation">'+random_quote.citation+'</span>';
  }

// Adds a year to the HTML if the quote object has the year property
    if (random_quote.year != null){
    message += '<span class="year">'+random_quote.year+'</span>';
    console.log('year');}

  message += '</p>';
document.getElementById('quote-box').innerHTML =message;

}
else {
  printQuote();
}
}
// Exceeds Expectation : Change the backgorund color of the page everytime the quote changes
function random_color(){
  var color = '#';
  var letters = '0123456789ABCDEF';
  for(var i = 0; i<6; i++){
      color+=letters[Math.floor(Math.random()*16)];
  }
document.body.style.backgroundColor =color;
}
// Exceeds Expectation : User has to select a Tag and the quotes displayed would be from the selected Tag category only.
function selTags(){
  var mylist= document.getElementById("myList");
  return mylist.options[mylist.selectedIndex].text;
}
// Exceeds Expectation : After every 30 seconds, a new quote appears.
var intervalID = window.setInterval(printQuote,30000);
