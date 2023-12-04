import bodyParser from 'body-parser';
import express from 'express';

const axios = require('axios');
const app = express();
const port = process.env.PORT || 8081;
const cors = require('cors');
const urlBase = 'https://api.mercadolibre.com';
const author = { name: 'Perla', lastname: 'Aguilar' };

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
      city: item.seller_address.city.name,
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

app.get('/api/items/:id', async (req, res) => {
  try {
    const id = req.params.id;
    console.log(req);

    if (!id) {
      return res
        .status(400)
        .json({ error: 'El parámetro "id" es obligatorio' });
    }

    const [itemsResponse, descriptionResponse] = await Promise.all([
      axios.get(`${urlBase}/items/${id}`),
      axios.get(`${urlBase}/items/${id}/description`),
    ]);

    const itemsData = itemsResponse.data;
    const descriptionData = descriptionResponse.data;
    const item = {
      id: itemsData.id,
      title: itemsData.title,
      price: {
        currency: itemsData.currency_id === 'ARS' ? '$' : itemsData.currency_id,
        amount: itemsData.price,
        decimals: (itemsData.price % 1).toFixed(2).slice(1),
      },
      picture: itemsData.thumbnail,
      condition: itemsData.condition === 'new' ? 'Nuevo' : 'Usado',
      free_shipping: itemsData.shipping.free_shipping,
      sold_quantity: itemsData.sold_quantity,
      description: descriptionData.plain_text,
    };

    const results = { author, item };

    res.json(results);
  } catch (error) {
    console.error(error);
    res
      .status(error.response?.status || 500)
      .send('Error interno del servidor');
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
