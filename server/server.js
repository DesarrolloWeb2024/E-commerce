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
      name: 'Reposera Plegable tipo bolso', 
      oldPrice: 97000, 
      price: 82000, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_754991-MLU73329399408_122023-O.webp'
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
      id: 4, 
      name: 'Promocion de Lentes de sol + ojotas Hawaianas',  
      oldPrice: 58000, 
      price: 48000, 
      urlImg: 'https://img.freepik.com/foto-gratis/mano-sujetando-chanclas-gafas-sol_23-2148775861.jpg?t=st=1731622494~exp=1731626094~hmac=aa894db62dee5d83966b6dfd4ae410716660fe243b69327737a7e6298375e1ac&w=740' 
    },
    { 
      id: 5, 
      name: 'Bote a remo', 
      oldPrice: 99000, 
      price: 79000, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_794435-MLA80121796282_112024-O.webp'
    },
    {
      id: 6, 
      name: 'Manta de playa',  
      oldPrice: 30000, 
      price: 19200, 
      urlImg: 'https://i.pinimg.com/736x/f0/6f/4a/f06f4aa7487a69d12d940663309d3304.jpg' 
    },
    { 
      id: 7, 
      name: 'Pelota de playa grande + pelota inflable Infantil',  
      oldPrice: 9500, 
      price: 7500, 
      urlImg: 'https://i.pinimg.com/736x/60/fe/6f/60fe6f36495f6aada0679790973a909d.jpg' 
    },
    { 
      id: 8, 
      name: 'Bolso playero grande',  
      oldPrice: 17000, 
      price: 15500, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_656655-MLU73879342025_012024-O.webp' 
    },      
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

