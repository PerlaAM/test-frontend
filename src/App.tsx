import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchBox from './components/SearchBox';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';

function App() {
  return (
    <section>
      <SearchBox />

      <Routes>
        <Route path='/items' element={<ItemList />} />
        <Route path='/items/:id' element={<ItemDetail />} />
      </Routes>
    </section>
  );
}

export default App;
