import { useEffect, useState } from 'react';
import Item from './Item';
import { useLocation } from 'react-router-dom';
import { ISearch } from '../interfaces/searchInterface';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';

export default function ProductList() {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get('search');
  const [itemData, setItemData] = useState<ISearch>();
  const [isLoading, setIsLoading] = useState(true);
  const [textLoading, setTextLoading] = useState('Cargando...');

  useEffect(() => {
    getItems(search);
  }, [search]);

  const getItems = (query: any) => {
    const apiUrl = `http://localhost:8081/api/items?q=${query}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setItemData(data);

        // Almaceno en localstorage el path (categorias) del producto
        if (data.categories.length > 0) {
          const categoriesArray = JSON.stringify(data.categories);
          localStorage.setItem('productPath', categoriesArray);
        }

        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(true);
        setItemData({} as ISearch);
        setTextLoading('No se encontrarón resultados');
        console.error(error);
      });
  };

  return (
    <>
      {isLoading && <p className='loading'>{textLoading}</p>}
      {!isLoading && (
        <>
          {itemData?.categories && itemData.categories.length > 0 && (
            <Breadcrumb categories={itemData.categories} />
          )}

          {itemData && Object.keys(itemData).length > 0 && (
            <div
              className={`container-item-list ${
                itemData.categories && itemData.categories.length === 0
                  ? 'pt-5'
                  : ''
              }`}
            >
              <div className='box'>
                {itemData.items.map((item) => (
                  <Link key={item.id} to={`/items/${item.id}`}>
                    <Item item={item} />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
