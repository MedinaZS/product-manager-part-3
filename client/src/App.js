import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './views/Main'
import ProductDetail from './views/ProductDetail';
import ProductUpdate from './views/ProductUpdate';

function App() {
  return (
    <div className="App mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/:id' element={<ProductDetail />} />
          <Route path='/:id/edit' element={<ProductUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
