
var colors = ['#16a085', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var currentQuote = '', currentAuthor = '';
var temp = -1;
var color = -1;

function openURL(url) {
   window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

function getQuote() {
  $.ajax({
    headers: { "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
             },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(response) {
      var r = JSON.parse(response);
      currentQuote = r.quote;
      currentAuthor = r.author;
      
      $(".quote-text").animate({
        opacity: 0
      }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
        $('#text').text(r.quote);
      });
      
      $(".quote-author").animate({
        opacity: 0
      }, 500,
         function() {
          $(this).animate({
            opacity: 1
          }, 500);
        $('#author').html(r.author);
      });
      temp = Math.floor(Math.random() * colors.length);
      while (temp == color) {
         temp = Math.floor(Math.random() * colors.length);
      }
      color = temp;
      $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
        
      }, 1000);
      
      $(".button").animate({
        backgroundColor: colors[color]
      }, 1000);
    }
  });
}

$(document).ready(function() {
  getQuote();
  $('#new-quote').on('click', getQuote);
  $('#tweet-quote').on('click', function() {
    
      openURL("https://twitter.com/inspire_us")
    
  });
    $('#facebook-post').on('click', function() {
          openURL("https://www.facebook.com/DeepLifeQuotes/")
    });
  
  $('#tumblr-quote').on('click', function() {
    openURL("http://thisiswhatimean.tumblr.com/")
  });
  
  $('#reddit-quote').on('click', function() {
    openURL("https://www.reddit.com/r/quotes/")
  });
                       
});
