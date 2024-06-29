const express = require('express');
const app = express();
const port = 8000;

app.get('/products', (req, res) => {
  res.json([{ id: 101, name: 'Phone' }, { id: 102, name: 'Laptop' }]);
});
app.listen(port, () => {
  console.log(`Product service is running on port ${port}`);
});