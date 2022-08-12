import React from "react";
import './Header.css';
import '../../Css/aem-grid.css';
import { Link, NavLink } from "react-router-dom";
// import search from '../Header/search.png';
// import user from '../Header/user.png';
// import bag from '../Header/shopping-bag.png';
import { FiSearch } from '@react-icons/all-files/fi/FiSearch';
import { FiUser } from '@react-icons/all-files/fi/FiUser';
import { RiShoppingBag3Line } from '@react-icons/all-files/ri/RiShoppingBag3Line';
import LoginApp from "../../Components/Authenticate/SignIn/LoginApp";
import logo from '../Header/venia-logo.png';

const Header = (props) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__logo" >
            <Link to="/"><img src={logo} /></Link>
          </div>
          <div className="header__categories">
            <nav>
              <ul>
                <li className="active"><NavLink to={'/'} >Home</NavLink></li>
                <li><NavLink to={'/women'}>Women</NavLink></li>
                <li><NavLink to={'/men'}>Men</NavLink></li>
                <li><NavLink to={'/electronics'}>Electronics</NavLink></li>
                <li><NavLink to={'/jewellery'}>Jewellery</NavLink></li>
              </ul>
            </nav>
          </div>
          <div className="header__icons">
            <ul>
              <li><NavLink to='#'><span><FiSearch /></span> Search</NavLink></li>
              <li className="dropdown sign"><NavLink to='#' className='dropbtn'><span><FiUser /></span> Sign in</NavLink>
                <div className="dropdown-content">
                  <div className="login">
                    <LoginApp />
                  </div>
                </div>
              </li>
              <li className="itemnumbers">
                <NavLink to="/cart">
                  <span className="cart__icon"><RiShoppingBag3Line /></span> {' '}
                  {props.countCartItems ? (
                    <span className="cart__count">{props.countCartItems}</span>
                  ) : (
                    ''
                  )}
                </NavLink>{' '}
              </li>
            </ul>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;
