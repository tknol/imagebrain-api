const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
  res.send("yep");
})

app.listen(3000, () => {
  console.log('app is running on port 3000');
});
