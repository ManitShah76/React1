import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Shop from './Shop';
import Login from './LoginSignUp/Login';
import SignUp from './LoginSignUp/SignUp';
import Footer from './Footer/Footer';
import Category from './Category/Category';
import ProductDetail from './ProductDetail/ProductDetail';
import Cart from './Cart/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />}></Route>
          <Route path='/category' element={<Category />}></Route>
          <Route path='/product/:pid' element={<ProductDetail />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
