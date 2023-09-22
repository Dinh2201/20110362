// controllers/mainController.js

const myGroup = require('../models/myGroup');

const logRequest = (req) => {
  const { method, url } = req;
  console.log(`Received a ${method} request for ${url}`);
}

const handleMSSV = (req, res) => {
  const id = req.params.id;

  const person = myGroup.find((p) => p.id === id);
  if (person) {
    res.status(200).json(person);
  } else {
    res.status(404).json({ error: 'Not valid' });
  }
}

const handleIndex = (req, res) => {
  let message = '<html><body><ul>';
  myGroup.forEach((person) => {
    message += `<li>${person.name}</li>`;
  });
  message += '</ul></body></html>';
  res.status(200).send(message);
}

const handleMessage = (req, res) => {
  const id = req.params.id;

  if (id)  {
    const person = myGroup.find((p) => p.id === id);
    if (person) {
      res.status(200).send(`<html><body><ul><li>${person.name}</li></ul></body></html>`);
    } else {
      res.status(404).send('Not valid');
    }
  }
}

module.exports = {
  logRequest,
  handleMSSV,
  handleIndex,
  handleMessage
};
