var request = require('request');
var fs = require('fs');

var options = {
  url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1',
  headers: {
    'X-Mashape-Key': '3sXhHLo4PnmshOetV8wh5iYWtFrap1IUEQxjsnaDFS4hcJ81ZJ'
  }
};

request(options).pipe(fs.createWriteStream('cards.json'));