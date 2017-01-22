var request = require('request');
var fs = require('fs');

var options = {
  url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1',
  headers: {
    'X-Mashape-Key': 'ENTER YOUR KEY HERE'
  }
};

request(options).pipe(fs.createWriteStream('cards.json'));