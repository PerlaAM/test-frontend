import React, { useState } from 'react';
import logo from '../assets/Logo_ML.png';
import logo2x from '../assets/Logo_ML@2x.png.png';
import searchIcon from '../assets/ic_Search.png';
import searchIcon2x from '../assets/ic_Search@2x.png.png';
import { useNavigate } from 'react-router-dom';

export default function SearchBox(props: any) {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate(`/items?search=${searchValue}`);
  };

  return (
    <header className='container-search-box'>
      <div className='box'>
        <img src={logo} srcSet={`${logo2x} 2x`} alt='Logo Mercado Libre' />
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Nunca dejes de buscar'
            aria-label='Ingresa el texto del producto que deseas buscar'
            value={searchValue}
            onChange={handleChange}
          />
          <button type='submit' aria-label='Buscar producto'>
            {' '}
            <img
              className='icon-search'
              src={searchIcon}
              srcSet={`${searchIcon2x} 2x`}
              alt='Buscar'
            />
          </button>
        </form>
      </div>
    </header>
  );
}
