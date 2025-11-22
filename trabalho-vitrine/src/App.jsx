import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header';
import CatalogoPage from './Pages/CatalogoPage';
import ProdutoPage from './Pages/ProdutoPage';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<CatalogoPage />} />
          <Route path="/produto/:id" element={<ProdutoPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
