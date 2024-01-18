const express = require('express');
const app = express();
const port = 3040;

app.get('/', (req, res) => {
  res.send('HELLO WORLD AND KSE!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
