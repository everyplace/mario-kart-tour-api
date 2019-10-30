var express = require('express');
var app = express();
var routes = require('./routes');
var cors = require('cors')

app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/api', routes.mariokart)

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
