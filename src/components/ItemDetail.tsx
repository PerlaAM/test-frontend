import GeneralButton from './GeneralButton';

export default function ItemDetail(props: any) {
  return (
    <div className='container-details'>
      <div className='box'>
        <div className='padding-2'>
          <div className='flex'>
            <div className='min-width'>
              <img src='' alt='' />
            </div>
            <div className='box-details'>
              <p className='status'>Nuevo - 234 vendidos</p>
              <h1 className='title'>Deco reverse sombrero oxford</h1>
              <h2 className='price'>$7,2464</h2>
              <GeneralButton title={'Comprar'} />
            </div>
          </div>
          <div className='box-description'>
            <h2 className='title-description'>Descripción del producto</h2>
            <p className='description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              adipisci quaerat tempora ducimus, magnam exercitationem. Sint non
              ipsa, sunt quibusdam provident perspiciatis delectus quo corporis
              quos tempora reprehenderit harum at?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
