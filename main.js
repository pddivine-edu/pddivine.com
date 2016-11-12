const express = require('express');
const app = express();
const config = require('config');

app.use(express.static('public'));

app.listen(config.server.port, () => {
  console.log(`Listening on port ${config.server.port}.`);
});