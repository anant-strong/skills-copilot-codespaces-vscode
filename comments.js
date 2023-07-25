// Create web server
// Create web server and run it
// http://localhost:3000

// Load modules
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Set template engine
app.set('view engine', 'pug');

// Set static files
app.use(express.static('public'));

// Import routes
const index = require('./routes/index');
const comments = require('./routes/comments');

// Use routes
app.use('/', index);
app.use('/comments', comments);

// 404 error handler
app.use((req, res, next) => {
  res.status(404);
  res.render('404', { title: '404: File Not Found' });
});

// 500 error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.render('500', { title: '500: Internal Server Error' });
});

// Listen on port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});