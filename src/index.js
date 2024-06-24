const express = require('express');
const cors = require('cors');

const app = express();

const PORT = 5000;

// consfig JSON response
app.use(express.json());

// solve CORS
app.use(cors({ credentials: true, origin: 'http://localhost:3000'}));

// public folder for images
app.use(express.static('public'));

// routes


app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
});

