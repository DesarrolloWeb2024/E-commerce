const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


app.get('/api/products', (req, res) => {
  const products = [
    { 
      id: 1, 
      name: 'Matambre', 
      oldPrice: 7500, 
      price: 5000, 
      urlImg: 'https://raffe.com.ar/wp-content/uploads/2019/06/Matambre-Raffe.jpg'
    },
    {
      id: 2, 
      name: 'Tapa de asado',  
      oldPrice: 11500, 
      price: 11200, 
      urlImg: 'https://raffe.com.ar/wp-content/uploads/2018/08/Asado-Raffe.jpg' 
    },
    { 
      id: 3, 
      name: 'Bola de lomo',  
      oldPrice: 8500, 
      price: 7000, 
      urlImg: 'https://raffe.com.ar/wp-content/uploads/2017/06/Bola-de-Lomo-Raffe.jpg' 
    },
    { 
      id: 3, 
      name: 'Paleta',  
      oldPrice: 3500, 
      price: 2200, 
      urlImg: 'https://raffe.com.ar/wp-content/uploads/2017/06/Paleta-Cuadril-Raffe.jpg' 
    },
    
    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
