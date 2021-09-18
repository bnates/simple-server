'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.status(200).sendFile(`${__dirname}/public/success.html`)
})

app.listen(PORT, () => {
  console.log(`server up: ${PORT}`);
});