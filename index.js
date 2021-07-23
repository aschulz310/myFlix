const express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan');
  ;

const app = express();

app.use(bodyParser.json());

app.use(morgan('common'));

app.use(express.static('public'));

app.get('/movies', (req, res) => {
  res.send('Successful GET request returning data on all movies');
});

app.get('/movies/:title', (req, res) => {
  res.send('Successful GET request returning data on a movie title');
});

app.get('/movies/genre/:name', (req, res) => {
  res.send('Successful GET request returning data on a genre name');
});

app.get('/movies/directors/:name', (req, res) => {
  res.send('Successful GET request returning data on a director name');
});

app.post('/users', (req, res) => {
  res.send('Successful POST request allowing user to register');
});

app.put('/users/:username', (req, res) => {
  res.send('Successful PUT request updating data on a user');
});

app.post('/users/:username/movies/:movieID', (req, res) => {
  res.send('Successful POST request saving a favorite movie');
});

app.delete('/users/:username/movies/:movieID', (req, res) => {
  res.send('Successful DELETE request removing a favorite movie');
});

app.delete('/users/:username', (req, res) => {
  res.send('Successful DELETE request removing a user account');
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