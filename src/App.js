import './App.css';
import NavBar from './components/NavBar/NavBar';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './helpers/Theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home';
import { Market } from './pages/Market/Market';
import Detail from './pages/Detail/Detail';
import { ProductList } from './pages/ProductList/ProductList';
import { UnderConstruction } from './pages/underConstruction/underConstruction';
import { Cart } from './pages/Cart/Cart';
import { CartProvider } from './context/cartContext'

function App() {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
          <div className="App">
            <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/market' element={<Market title={'Productos Recomendados'} />}/> 
                <Route path='/product/:id' element={<Detail />}/> 
                <Route path='/products/:category' element={<ProductList />}/> 
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element={<UnderConstruction />} />            
              </Routes>
            </BrowserRouter>
          </div>
      </ThemeProvider>
    </CartProvider>
  );
}

export default App;
