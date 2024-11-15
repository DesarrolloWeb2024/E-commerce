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
      urlImg: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSmYckEMeFKNyPfp2TJu1Fup4HIBjibtiCqO3I6nbhWev7LIyxevl52_-aZwkaoJmuOVxzl0GTcx9nqq5G4T3ArSy99H_T5&usqp=CAE'
    },
    {
      id: 2, 
      name: 'medialunas de manteca',  
      oldPrice: 4500, 
      price: 4000, 
      urlImg: 'https://purodiseno.lat/wp-content/uploads/2023/04/CAMPERA-TECLADO-2-821x1024.jpg' 
    },
    { 
      id: 3, 
      name: 'medialunas de grasa',  
      oldPrice: 4500, 
      price: 4000, 
      urlImg: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwqHX1fVP2DUn6mEw05ukydZ6KOgkf0w3N3ZEHHJnDUW7WtxSEzdOZ73YxCn-FBC5kYxGeF4wy9zakpXVDOXbjQouNAmyH1LTbzkyuK2t0u9We1eAqfkFFDw&usqp=CAE' 
    },
    { 
      id: 3, 
      name: 'rosca de pascua',  
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
