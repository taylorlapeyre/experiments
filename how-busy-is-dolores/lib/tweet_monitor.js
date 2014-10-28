var Twitter = require('node-tweet-stream');

var TweetMonitor = function(phrase) {
  this.tweets = [];
  this.phrase = phrase;

  this.api = new Twitter({
    consumer_key:    'IuBH1acAhv8dyqKvNpBlwQkLh',
    consumer_secret: 'lxlTDsA23Ax6Lrt53vsG2zt4v50FWBhKP9gajzdZUZ00C25BUe',
    token:           '14070411-bl9FQVfRIFRrixIg6SRxosiFGgY8qt15sMAEcETNo',
    token_secret:    'tV93qteEYlL702xsMnJwDYKSqegOeBrXtX0R12BJ3bpZG'
  });

  this.api.on('tweet', function(tweet) {
    this.tweets.push(tweet);
  }.bind(this));
}

TweetMonitor.prototype.startListening = function() {
  this.api.track(this.phrase);
}

TweetMonitor.prototype.stopListening = function() {
  this.api.untrack(this.phrase);
}

TweetMonitor.prototype.resetTweets = function() {
  this.tweets = [];
}

TweetMonitor.prototype.count = function(options) {
  if (options['seconds'] === undefined) {
    options.seconds = 10;
  }

  this.resetTweets();
  this.startListening();
  setTimeout(function() {
    this.stopListening();
    options.callback(this.tweets.length);
  }.bind(this), options.seconds * 1000);
}

module.exports = TweetMonitor;
