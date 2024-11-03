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
      name: 'Mouse Logitech', 
      oldPrice: 37500, 
      price: 35000, 
      urlImg: 'https://i.ebayimg.com/images/g/UosAAOSwTV5mRyCj/s-l400.png'
    },
    {
      id: 2, 
      name: 'Teclado Gamer',  
      oldPrice: 22500, 
      price: 21000, 
      urlImg: 'https://www.heavenimagenes.com/heavencommerce/9297a8d7-5b05-4931-b287-026a1b306e14/images/v2/SOUL/2015_xlarge.jpg' 
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