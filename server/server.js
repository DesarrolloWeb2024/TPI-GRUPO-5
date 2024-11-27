const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


app.get('/api/products', (req, res) => {
  // Base de datos simulada
  const productsDB = [
    {
      id: 1,
      name: 'Pizza de peperoni',
      oldPrice: 13000,
      price: 10000,
      urlImg: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg'
    },
    {
      id: 2,
      name: 'Pizza especial tomate y rúcula',
      oldPrice: 16500,
      price: 16100,
      urlImg: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/05/pizza-al-ajo-con-tomates-frescos-1080x671.jpg'
    },
    {
      id: 3,
      name: '12 Empanadas',
      oldPrice: 14500,
      price: 9000,
      urlImg: 'https://www.laespanolaaceites.com/wp-content/uploads/2019/06/empanadas-de-carne-de-cerdo-1080x671.jpg'
    },
    {
      id: 4,
      name: '6 Empanadas Horno',
      oldPrice: 5000,
      price: 4000,
      urlImg: 'https://media.istockphoto.com/id/1171946922/es/foto/empanadas.jpg?s=612x612&w=0&k=20&c=Lo5Ybk5FbjjvdJcE12fSandBIdZI45P0wEVSQRzvuT8='
    },


  ];


  res.json(productsDB);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
