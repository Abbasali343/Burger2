const mongoose = require('mongoose')
const express = require('express');
const { json } = require('express');
const app = express()
const port = 5000

require('./db/connection');

app.use(express.json());

//const User = require('./Models/userSchema');

app.use(require('./Routes/Auth'));



app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})