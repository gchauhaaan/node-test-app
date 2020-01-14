'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send('Hello World, i am new to this');
=======
  res.send('Hello World, I am new to this alien world');
>>>>>>> 16cb158a0a8a0b2d04af84ab14792bb7bfee6b03
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
