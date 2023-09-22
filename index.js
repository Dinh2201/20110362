// index.js

const express = require('express');
const app = express();
const { URL } = require('url');
const PORT = 5000;

const routes = require('./routes/index');

app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
