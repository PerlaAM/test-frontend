import GeneralButton from './GeneralButton';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IDetail, IPrice } from '../interfaces/detailInterface';
import Breadcrumb from '../components/Breadcrumb';

export default function ItemDetail(props: any) {
  const { id } = useParams();
  const [itemData, setItemData] = useState<IDetail>();
  const [productPath, setProductPath] = useState([]);

  useEffect(() => {
    const getProductPath = localStorage.getItem('productPath');
    const productPath = getProductPath ? JSON.parse(getProductPath) : null;

    setProductPath(productPath);
    getDetails(id);
  }, []);

  const getDetails = (id: any) => {
    const apiUrl = `http://localhost:8081/api/items/${id}`;

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

  function formatPrice(price: IPrice) {
    const { currency, amount, decimals } = price;
    const formattedAmount = amount.toLocaleString();
    const formattedDecimals = decimals.toString().replace('.', '');
    const formattedPrice = (
      <>
        <span> {currency} </span>
        {formattedAmount}
        <span className='decimal'>{formattedDecimals}</span>
      </>
    );

    return formattedPrice;
  }

  return (
    <>
      {productPath && productPath.length > 0 && (
        <Breadcrumb categories={productPath} />
      )}

      <div className='container-details'>
        <div className='box'>
          <div className='padding-2'>
            <div className='flex'>
              <div className='min-width'>
                <img src={itemData?.item.picture} alt='' />
              </div>
              <div className='box-details'>
                <p className='status'>
                  {itemData?.item.condition}{' '}
                  {itemData?.item.sold_quantity
                    ? ' - ' + itemData?.item.sold_quantity + ' vendidos'
                    : ''}
                </p>
                <h1 className='title'>{itemData?.item.title}</h1>
                <h2 className='price'>
                  {itemData?.item.price ? formatPrice(itemData.item.price) : ''}
                </h2>

                <GeneralButton title={'Comprar'} />
              </div>
            </div>
            <div className='box-description'>
              <h2 className='title-description'>Descripción del producto</h2>
              <p className='description'>{itemData?.item.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
