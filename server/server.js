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
      urlImg: 'https://elparisino.com/wp-content/uploads/2020/07/IMG_0029-scaled.jpg'
    },
    {
      id: 2, 
      name: 'Medialunas rellenas de dulce de leche',  
      oldPrice: 4500, 
      price: 4000, 
      urlImg: 'https://www.minutoneuquen.com/u/fotografias/m/2024/4/19/f768x1-663808_663935_5050.jpg' 
    },
    { 
      id: 3, 
      name: 'Pan lactal',  
      oldPrice: 5500, 
      price: 5000, 
      urlImg: 'https://cuk-it.com/wp-content/uploads/2023/01/pandemolde-stories-4.webp' 
    },
    { 
      id: 4, 
      name: 'Rosca de pascua',  
      oldPrice: 5000, 
      price: 4000, 
      urlImg: 'https://www.rionegro.com.ar/wp-content/uploads/2021/03/165257536_838201626767443_190214730888920895_n.jpg' 
    },
    
    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
