const express = require('express');
const app = express();
const PORT = 8080;

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(PORT, () => {
  console.log(`App running on http://localhost:${PORT}`);
});
