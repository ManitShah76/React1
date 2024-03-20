import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Images/logo.png';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const {getTotalCartItems} = useContext(CartContext)

  const handleLogout = () => {
    localStorage.removeItem('name'); 
    setIsLoggedIn(false);
    alert("are you sure..!")
    setUserName('');
  };

  const handleLogin = () => {
    const user_name = JSON.parse(localStorage.getItem("name"))
    setIsLoggedIn(true);
    setUserName(user_name);
  };

  const renderAuthLink = () => {
    if (isLoggedIn) {
      return (
        <>
          <span>Welcome, {userName}</span>
          <button onClick={handleLogout} className="nav-link mx-2 text-uppercase" >
            <i className="fa-solid fa-circle-user me-1"></i> Logout
          </button>
        </>
      );
    } else {
      return (
        <Link to='/login' className="nav-link mx-2 text-uppercase" onClick={handleLogin}>
          <i className="fa-solid fa-circle-user me-1"></i> Login
        </Link>
      );
    }
  };

  return (
    <div>
      <div className="superNav border-bottom py-2 bg-light">
        <div className="container"></div>
      </div>
      <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
        <div className="container">
          <img src={logo} alt="" width="150px" height="50px" />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavDropdown">

            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link to='/' className="nav-link mx-2 text-uppercase active" aria-current="page" >Shop</Link>
              </li>
              <li className="nav-item">
                <Link to='/category' className="nav-link mx-2 text-uppercase">Category</Link>
              </li>
              <li className="nav-item">
                <Link to='' className="nav-link mx-2 text-uppercase">About</Link>
              </li>
              <li className="nav-item">
                <Link to='' className="nav-link mx-2 text-uppercase">Contact</Link>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto d-flex align-items-center">
              {renderAuthLink()}
              <li className="nav-item">
                <Link to='/cart' className="nav-link mx-2 text-uppercase" ><i className="fa-solid fa-cart-shopping cart"></i> Cart</Link>
              </li>
                <div className="cart-count">{getTotalCartItems()}</div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
