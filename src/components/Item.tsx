import shippingIcon from '../assets/ic_shipping.png';
import shippingIcon2x from '../assets/ic_shipping@2x.png.png';

export default function ItemList(props: any) {
  let itemData = props.item;
  const moneyFormat = (price: number): string => {
    return `$${price.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };

  return (
    <div className='container-item'>
      <div className='with-border'>
        <img
          className='thumbnail'
          src={itemData.picture}
          alt='Imagen del producto'
        />
        <div className='box-information'>
          <p className='price'>
            {moneyFormat(itemData.price.amount)}
            {itemData.free_shipping ? (
              <img
                className='icon-search'
                src={shippingIcon}
                srcSet={`${shippingIcon2x} 2x`}
                alt='Envío gratis'
              />
            ) : (
              ''
            )}
          </p>
          <h1 className='title'>{itemData.title}</h1>
        </div>
        <p className='city'>{itemData.city}</p>
      </div>
    </div>
  );
}
