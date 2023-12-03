import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <section>
      <Routes>
        <Route path='/' element={<SearchBox />} />
      </Routes>
    </section>
  );
}

export default App;
