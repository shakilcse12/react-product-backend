const express = require('express');
const cors = require('cors');
const app = express();
const products = require('./api/products.json');

app.use(cors({
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: false
}));


app.get('/products', (req, res) => {
  res.json(products); 
});

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p._id === (req.params.id));
  if (!product) return res.status(404).send('Product not found');
  res.json(product);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
