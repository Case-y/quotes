$(document).ready(function()  { 
  $("#main-button").click(function()
{
    var allquotes = ["Stay Hungry. Stay Foolish, Steve Jobs", "Good Artists Copy, Great Artists Steal, Pablo Picasso", "Argue with idiots, and you become an idiot, Paul Graham", "Be yourself; everyone else is already taken, Oscar Wilde", "Simplicity is the ultimate sophistication, Leonardo Da Vinci", "Life is 10% what happens to you and 90% how you react to it, Charles R. Swindoll", "Surround yourself only with people who are going to lift you higher, David Roads", "Love takes Action, David Roads", "Wake up with determination / Go to bed with satisfaction, Anonymous", "Work Hard Play Hard, Kanye West", "If you want to achieve greatness stop asking for permission, Anonymous", "Things work out best for those who make the best of how things work out, John Wooden", "“Don't cry because it's over, smile because it happened.”, Dr. Seuss", "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth, William W. Purkey", "You only live once, but if you do it right, once is enough, Mae West", "In three words I can sum up everything I've learned about life: it goes on, Robert Frost", "freeCodeCamp is Amazing!!!, Casey Takeda and others", "My favorite day of them all is breakfast, just because of sasusages, Casey Takeda", "Snapchat is addicting. Add me!, Casey Takeda", "Random Note: This was dedicated to my one and only... :)", "Insanity is doing the same thing, over and over again, but expecting different results, Anonymous", "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle, Einstein"]
    
randomQuote = allquotes[Math.floor(Math.random()*allquotes.length)];
    
    $(".inside").text(randomQuote);
    
                          });

});
