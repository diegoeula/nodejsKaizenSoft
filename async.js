const express = require('express');

const app = express();

app.get('/', handler);

app.listen(3000);

async function handler(req, res) {
  throw new Error('Hang!');
}

function wait(ms) {
  return new Promise(resolve => setTimeout(() => resolve(), ms));
}