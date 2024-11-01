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
      name: 'Taza gatito programador', 
      oldPrice: 3700, 
      price: 3000, 
      urlImg: 'https://m.media-amazon.com/images/I/617mM7y-SbL._AC_UL320_.jpg'
    
    },
    {
      id: 2, 
      name: 'Llevero hello world!',  
      oldPrice: 6500, 
      price: 5200, 
      urlImg: 'https://www.esyumi.com/460-medium_default/hello-world-el-llavero-de-los-programadores.jpg' 
    },
    { 
      id: 3, 
      name: 'Tablet Lenovo Tab M11 ',  
      oldPrice: 228500, 
      price: 210000, 
      urlImg: 'https://p1-ofp.static.pub/medias/26028977916_newPic_202407310451471725540509557.png' 
    },
    { 
      id: 3, 
      name: 'Remera HTML + CSS',  
      oldPrice: 13500, 
      price: 12700, 
      urlImg: 'https://acdn.mitiendanube.com/stores/001/279/959/products/311-d0344a838987b4601d16419088698578-640-0.webp' 
    },
    
    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});