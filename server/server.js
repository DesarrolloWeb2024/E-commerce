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
      name: 'Reposera Plegable', 
      oldPrice: 97000, 
      price: 82000, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_2X_984961-MLU75915935498_042024-F.webp'
    },
    {
      id: 2, 
      name: 'Campera Keyboard programador',  
      oldPrice: 11500, 
      price: 11200, 
      urlImg: 'https://purodiseno.lat/wp-content/uploads/2023/04/CAMPERA-TECLADO-2-821x1024.jpg' 
    },
    { 
      id: 3, 
      name: 'Sillon Inflable Playero',  
      oldPrice: 18500, 
      price: 18000, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_820673-MLA40428291057_012020-O.webp' 
    },
    { 
      id: 3, 
      name: 'Taza Código De Programacion',  
      oldPrice: 3500, 
      price: 2200, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_786656-MLA46832914211_072021-O.webp' 
    },
    
    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
