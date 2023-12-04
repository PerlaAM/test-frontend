import { useEffect, useState } from 'react';
import Item from './Item';
import { useLocation } from 'react-router-dom';
import { ISearch } from '../interfaces/searchInterface';
import { Link } from 'react-router-dom';

export default function ProductList(props: any) {
  const location = useLocation();
  const search = new URLSearchParams(location.search).get('search');
  const [itemData, setItemData] = useState<ISearch>();

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
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Link to='/items:id'>
      <div className='container-item-list'>
        <div className='box'>
          {itemData?.items.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Link>
  );
}
