// In the Node.js server, in the routes/users.js file
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const router = express.Router();
router.use(bodyParser.json());
const secretKey = 'secretkey123'; // A secret key used to sign the JWT


router.post('/login', (req, res) => {
  // Verify the user's credentials
  const username = req.body.username;
  const password = req.body.password;
  if (username === 'user1' && password === 'password123') {
    // Create the JWT
    const payload = {
      userId: 1,
      name: 'John Doe',
      email: 'johndoe@example.com'
    };
    const token = jwt.sign(payload, secretKey);

    // Send the JWT to the React Native app
    res.json({ token });
  } else {
    // Invalid credentials, send an error response
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

router.get('/protected-route', (req, res) => {
  // Extract the JWT from the request header
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  // Verify the JWT
  jwt.verify(token, secretKey, (err, user) => {
    if (err) {
      // JWT is invalid, return an error response
      res.status(403).json({ error: 'Invalid JWT' });
    } else {
      // JWT is valid, return the protected data
      res.json({ data: 'Protected data' });
    }
  });
});


router.put('/user/:userId', (req, res) => {
  // Handle a PUT request to the /users/:userId route
});

router.delete('/user/:userId', (req, res) => {
  // Handle a DELETE request to the /users/:userId route
});

module.exports = router;





