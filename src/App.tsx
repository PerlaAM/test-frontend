import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchBox from './components/SearchBox';
import ItemList from './components/ItemList';

function App() {
  return (
    <section>
      <SearchBox />

      <Routes>
        <Route path='/items' element={<ItemList />} />
      </Routes>
    </section>
  );
}

export default App;
