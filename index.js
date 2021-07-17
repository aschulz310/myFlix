const express = require('express'),
  morgan = require('morgan');

const app = express();

app.use(morgan('common'));

app.use(express.static('public'));

app.get('/movies', (req, res) => {
  res.json(topTen);
});

app.get('/', (req,res) => {
	res.send('<h1>Welcome to myFlix</h1>');
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});