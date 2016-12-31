var Electronify = require('electronify');

var app = Electronify(__dirname + '/index.html', {
    width: 640, height: 360,
    backgroundColor: '#000000',
    titleBarStyle: 'hidden'
})
