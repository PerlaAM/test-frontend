import bodyParser from 'body-parser';
import express from 'express';

const axios = require('axios');
const app = express();
const port = process.env.PORT || 8081;
const cors = require('cors');
const urlBase = 'https://api.mercadolibre.com';

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/items', async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) {
      return res
        .status(400)
        .json({ errosr: 'El parámetro "q" es obligatorio' });
    }

    const apiUrl = `${urlBase}/sites/MLA/search?q=${query}&limit=4`;
    const response = await axios.get(apiUrl);
    const { results: data, filters: categories } = response.data;

    const author = { name: '', lastname: '' };

    const items = data.map((item) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id === 'ARS' ? '$' : item.currency_id,
        amount: item.price,
        decimals: (item.price % 1).toFixed(2).slice(1),
      },
      picture: item.thumbnail,
      condition: item.condition === 'new' ? 'Nuevo' : 'Usado',
      free_shipping: item.shipping.free_shipping,
    }));

    const categoriesArray =
      categories?.length > 0
        ? categories[0].values[0].path_from_root.map(
            (category) => category.name
          )
        : [];

    const results = { author, categories: categoriesArray, items };

    res.json(results);
  } catch (error) {
    console.error(error);
    res
      .status(error.response?.status || 500)
      .send('Error interno del servidor');
  }
});

app.get('/api/items', async (req, res) => {
  try {
    const id = req.query.id;

    if (!id) {
      return res
        .status(400)
        .json({ error: 'El parámetro "id" es obligatorio' });
    }

    const [itemsResponse, categoriesResponse] = await Promise.all([
      axios.get(`https://api.mercadolibre.com/items/${id}`),
      axios.get(`${urlBase}/items/${id}​/description`),
    ]);

    const author = { name: '', lastname: '' };

    res.json(itemsResponse);
  } catch (error) {
    console.error(error);
    res
      .status(error.response?.status || 500)
      .send('Error interno del servidor');
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
