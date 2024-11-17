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
      name: 'Tienda de campaña playa',  
      oldPrice: 35500, 
      price: 34200, 
      urlImg: 'https://m.media-amazon.com/images/I/81s+fO9AOdL._AC_UF894,1000_QL80_.jpg' 
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
      name: 'Promocion de Lentes de sol + ojotas Hawaianas',  
      oldPrice: 58000, 
      price: 48000, 
      urlImg: 'https://img.freepik.com/foto-gratis/mano-sujetando-chanclas-gafas-sol_23-2148775861.jpg?t=st=1731622494~exp=1731626094~hmac=aa894db62dee5d83966b6dfd4ae410716660fe243b69327737a7e6298375e1ac&w=740' 
    },
    
    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
