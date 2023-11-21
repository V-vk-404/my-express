const express = require('express');
const bodyParser = require('body-parser'); // Add this line to parse the request body

const app = express();
const port = 3000;

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

// Handle POST requests to the /postmem endpoint
app.post('/', (req, res) => {
  // Assuming the request body contains JSON data
  const requestData = req.body;

  // Your application logic goes here
  // For example, log the received data and send a response
  console.log('', requestData);
  res.status(200).send('Hello World!');
});

// Route handler for health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
