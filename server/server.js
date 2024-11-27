const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/api/products', (req, res) => {
    const products = [
        { 
            id: 1, 
            name: 'Taladro Atornillador Inalámbrico Black Decker', 
            oldPrice: 85000, 
            price: 59500, 
            urlImg: 'https://http2.mlstatic.com/D_NQ_NP_2X_925066-MLA74600772037_022024-F.webp'
        },
        {
            id: 2, 
            name: 'Set Kit Juego Puntas 100 Piezas Con Maletin 1 Pulgada Truper',  
            oldPrice: 55000, 
            price: 38500, 
            urlImg: 'https://http2.mlstatic.com/D_NQ_NP_2X_702828-MLA50137509977_052022-F.webp'
        },
        { 
            id: 3, 
            name: 'Máscara Fotosensible St-1i Din16',  
            oldPrice: 56200, 
            price: 39400, 
            urlImg: 'https://http2.mlstatic.com/D_NQ_NP_2X_997689-MLA71255444453_082023-F.webp'
        },
        { 
            id: 4, 
            name: 'Compresor De Aire Sin Aceite Alta Recuperacion 24 L Daewoo',  
            oldPrice: 97000, 
            price: 61380, 
            urlImg: 'https://http2.mlstatic.com/D_NQ_NP_2X_928282-MLA79505323208_102024-F.webp'
        }
    ];
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});