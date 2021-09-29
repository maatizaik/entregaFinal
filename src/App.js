import './App.css';
import{BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/navBar';
import { CartProvider } from './context/context';
//paginas
import Home from './pages/home';
import Categorias from './pages/categorias';
import Carrito from './pages/carrito';
import ProductoDetalle from './pages/productos-detalle';
import Productos from './pages/productos';
import CategoriaProductos from './pages/categorias-productos';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/productos">
            <Productos/>
          </Route>
          <Route exact path="/producto-detalle/:id">
            <ProductoDetalle/>
          </Route>
          <Route exact path="/categorias">
            <Categorias/>
          </Route>
          <Route exact path="/categoria-producto/:id">
            <CategoriaProductos/>
          </Route>
          <Route exact path="/carrito">
            <Carrito/>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
