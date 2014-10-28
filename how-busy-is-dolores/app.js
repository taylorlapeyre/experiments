var TweetMonitor = require('./lib/tweet_monitor');
var app          = require('express')();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('port', (process.env.PORT || 8000));

var config = {
  intervalInSeconds: 120,
  phrase:            'happy'
}

var monitor = new TweetMonitor(config.phrase);

var tweetCount = 0;
setInterval(function() {
  monitor.count({
    seconds: config.intervalInSeconds,
    callback: function(numTweets) {
      tweetCount = numTweets;
    }
  });
}, config.intervalInSeconds * 1000);

app.get('/', function(req, res) {
  res.render('index.html', {
    count:    tweetCount,
    phrase:   config.phrase,
    interval: config.intervalInSeconds
  });
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:", app.get('port'));
});
