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
      name: 'Taladro Atornillador Inalambrico Black Decker Maletín Cd121k', 
      oldPrice: 85000, 
      price: 59500, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_2X_925066-MLA74600772037_022024-F.webp'
    },
    {
      id: 2, 
      name: 'Juego Set Kit De 3 Pinzas De Presion Crossmaster',  
      oldPrice: 55000, 
      price: 38500, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_2X_830234-MLA74477226528_022024-F.webp' 
    },
    { 
      id: 3, 
      name: 'Mascara Fotosensible St-1i Din16 + 2 Escuadras Magnéticas',  
      oldPrice: 56200, 
      price: 39400, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_2X_997689-MLA71255444453_082023-F.webp' 
    },
    { 
      id: 3, 
      name: 'Amoladora De Banco Sierra Kld Kldab3s Minitorno 300w 6 En 1',  
      oldPrice: 73400, 
      price: 51380, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_2X_903220-MLA74601145979_022024-F.webp' 
    },
    
    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
