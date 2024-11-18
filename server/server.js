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
      name: 'Pan frances', 
      oldPrice: 2500, 
      price: 2000, 
      urlImg: 'https://enrilemoine.com/wp-content/uploads/2024/06/pan-frances-by-enrilemoine-13.webp'
    },
    {
      id: 2, 
      name: 'medialunas de manteca',  
      oldPrice: 4500, 
      price: 4000, 
      urlImg: 'https://www.midiariodecocina.com/wp-content/uploads/2022/01/Medialunas03.jpg' 
    },
    { 
      id: 3, 
      name: 'Pan lactal',  
      oldPrice: 5500, 
      price: 5000, 
      urlImg: 'https://cuk-it.com/wp-content/uploads/2023/01/pandemolde-stories-4.webp' 
    },
    { 
      id: 3, 
      name: 'rosca de pascua',  
      oldPrice: 5000, 
      price: 4000, 
      urlImg: 'https://cocinerosargentinos.com/content/recipes/original/recipes.19510.jpg' 
    },
    
    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
