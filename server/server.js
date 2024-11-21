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
      name: 'Cámara web HD 1080P', 
      oldPrice: 37500, 
      price: 35000, 
      urlImg: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSmYckEMeFKNyPfp2TJu1Fup4HIBjibtiCqO3I6nbhWev7LIyxevl52_-aZwkaoJmuOVxzl0GTcx9nqq5G4T3ArSy99H_T5&usqp=CAE'
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
      id: 4, 
      name: 'Taza Código De Programacion',  
      oldPrice: 3500, 
      price: 2200, 
      urlImg: 'https://http2.mlstatic.com/D_NQ_NP_786656-MLA46832914211_072021-O.webp' 
    },
    {
      id: 5, 
      name: 'Aceite De Coco Neutro Natural 800ml',  
      oldPrice: 19600, 
      price: 18600, 
      urlImg: 'https://acdn.mitiendanube.com/stores/626/963/products/02-coco-neutro-8001-77d628da6c59fc42ac16916810631318-640-0.webp' 
    },
    {
      id: 6, 
      name: 'Budin integral Ciruela y Nuez S/Azucar 300g',  
      oldPrice: 4200, 
      price: 3700, 
      urlImg: 'https://acdn.mitiendanube.com/stores/002/133/760/products/budinc211-53d82703ac32cb42c216600979462368-640-0.webp' 
    },
    {
      id: 7, 
      name: 'Mantequilla de Mani BEEPURE 400g',  
      oldPrice: 4000, 
      price: 3550, 
      urlImg: 'https://acdn.mitiendanube.com/stores/001/130/674/products/beepure_mantequillas-de-mani-370g1-04914bc2fb19ca76c416268819865808-1024-1024.jpg' 
    },
    {
      id: 8,
      name: 'Harina de Almentras x200g Natural Seed',  
      oldPrice: 6300, 
      price: 5690, 
      urlImg: 'https://latiendadelceliaco.com.ar/wp-content/uploads/2021/04/HARINA-DE-ALMENDRAS-NATURAL-SEED.jpg' 
    },

    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
