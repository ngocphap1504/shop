import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './component/Cart';
import Header from './component/Header';
import Home from './component/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/cart" element={<Cart/>} exact />
        </Routes>
      </div>     
    </BrowserRouter>
  );
}

export default App;
