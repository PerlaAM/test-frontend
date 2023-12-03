import Item from './Item';

export default function ProductList(props: any) {
  let data = [
    {
      id: 'MLA1119494302',
      title: '2 Banquito Redondo Banco Taburete Silla De Pino Natural 30cm',
      condition: 'new',
      thumbnail_id: '906328-MLA48829756773_012022',
      catalog_product_id: null,
      listing_type_id: 'gold_special',
      permalink:
        'https://articulo.mercadolibre.com.ar/MLA-1119494302-2-banquito-redondo-banco-taburete-silla-de-pino-natural-30cm-_JM',
      buying_mode: 'buy_it_now',
      site_id: 'MLA',
      category_id: 'MLA6656',
      domain_id: 'MLA-STOOLS_AND_BENCHES',
      thumbnail:
        'http://http2.mlstatic.com/D_906328-MLA48829756773_012022-I.jpg',
      currency_id: 'ARS',
      order_backend: 1,
      price: 14022,
      original_price: 15580,
      sale_price: null,
      sold_quantity: 50,
      available_quantity: 1,
      official_store_id: null,
      use_thumbnail_id: true,
      accepts_mercadopago: true,
      tags: [],
      variation_filters: [],
      shipping: {
        store_pick_up: false,
        free_shipping: true,
        logistic_type: 'fulfillment',
        mode: 'me2',
        tags: ['fulfillment', 'MLA-CHG-threshold-nov-23', 'self_service_in'],
        benefits: null,
        promise: null,
      },
      stop_time: '2042-01-09T04:00:00.000Z',
      seller: {},
      seller_address: {},
      address: {},
      attributes: [],
      variations_data: {},
      installments: {},
      winner_item_id: null,
      catalog_listing: false,
      discounts: null,
      promotions: [],
      inventory_id: null,
    },
    {
      id: 'MLA831548882',
      title: 'Atril Infantil Pizarra Pizarron Niños Niñas',
      condition: 'new',
      thumbnail_id: '736903-MLA50030414062_052022',
      catalog_product_id: null,
      listing_type_id: 'gold_special',
      permalink:
        'https://articulo.mercadolibre.com.ar/MLA-831548882-atril-infantil-pizarra-pizarron-ninos-ninas-_JM',
      buying_mode: 'buy_it_now',
      site_id: 'MLA',
      category_id: 'MLA352343',
      domain_id: 'MLA-CHALKBOARDS_AND_WHITEBOARDS',
      thumbnail:
        'http://http2.mlstatic.com/D_736903-MLA50030414062_052022-I.jpg',
      currency_id: 'ARS',
      order_backend: 2,
      price: 2520,
      original_price: null,
      sale_price: null,
      sold_quantity: 250,
      available_quantity: 1,
      official_store_id: null,
      use_thumbnail_id: true,
      accepts_mercadopago: true,
      address: {
        state_id: 'AR-C',
        state_name: 'Capital Federal',
        city_id: null,
        city_name: 'Capital Federal',
      },
      tags: [],
      shipping: {},
      stop_time: '2039-12-18T04:00:00.000Z',
      seller: {},
      seller_address: {},
      attributes: [],
      installments: {},
      winner_item_id: null,
      catalog_listing: false,
      discounts: null,
      promotions: [],
      inventory_id: 'MHPT91417',
    },
  ];

  return (
    <div className='container-item-list'>
      <div className='box'>
        {data.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
