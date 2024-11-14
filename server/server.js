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
      name: 'Disco-solido interno kingston sata-960g',  
      oldPrice: 18500, 
      price: 18000, 
      urlImg: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQwqHX1fVP2DUn6mEw05ukydZ6KOgkf0w3N3ZEHHJnDUW7WtxSEzdOZ73YxCn-FBC5kYxGeF4wy9zakpXVDOXbjQouNAmyH1LTbzkyuK2t0u9We1eAqfkFFDw&usqp=CAE' 
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
