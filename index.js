const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 8080;

app.use(express.static('public'));
app.use(bodyParser.json());

// Endpoint to save experiment data
app.post('/save-data', (req, res) => {
  const data = req.body;
  const filename = `data_${Date.now()}.json`;

  fs.writeFile(`./${filename}`, JSON.stringify(data), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Failed to save data');
    } else {
      res.send('Data saved successfully!');
    }
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
