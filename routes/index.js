// routes/index.js

const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');
const myGroup = require('../models/myGroup')

router.get('/', (req, res) => {
  mainController.logRequest(req);
  res.status(200).json(myGroup);
});

router.get('/MSSV/:id', (req, res) => {
  mainController.logRequest(req);
  mainController.handleMSSV(req, res);
});

router.get('/message/:id', (req, res) => {
  mainController.logRequest(req);
  mainController.handleMessage(req, res);
});

router.get('/message', (req, res) => {
  mainController.logRequest(req);
  let message = '<html><body><ul>';
  myGroup.forEach((person) => {
    message += `<li>${person.name}</li>`;
  });
  message += '</ul></body></html>';
  res.status(200).send(message);
});

router.get('/MSSV', (req, res) => {
  mainController.logRequest(req);
  res.status(200).json(myGroup.map(person => person.name));
});

module.exports = router;
