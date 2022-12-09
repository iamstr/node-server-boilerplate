const express = require('express');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const winston = require('winston');

const app = express();
try {
app.use('/users', usersRouter);
app.use('/login', loginRouter);


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

  // Use the app.use() method to define error-handling middleware
  app.use((err, req, res, next) => {
    // Log the error using the Winston logging library
    winston.error(err.message, err);

    // Return a generic error response to the client
    res.status(500).send('Something went wrong');
  });

  // Start the server
  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
} catch (err) {
  // Log any unhandled exceptions using the Winston logging library
  winston.error(err.message, err);
}