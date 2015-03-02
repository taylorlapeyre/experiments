var Style = require('./models/style');

/*
   Because of the asynchronous nature of Javascript, we can't just
   do things like:

     { styles: Style.find() }

   Because of this, this file returns a function, which can then be called.
   When the function returns and passes back into `callback`,
   the data is there.
*/


module.exports = function(callback) {
  Style.find(function(err, styles) {
    callback({
      styles: styles
    })
  });
}
