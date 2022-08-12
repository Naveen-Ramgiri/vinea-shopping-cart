import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { HamburgerData } from './HamburgerData';
import './Hamburger.css';
import { IconContext } from 'react-icons';
import { FiSearch } from '@react-icons/all-files/fi/FiSearch';
import { RiShoppingBag3Line } from '@react-icons/all-files/ri/RiShoppingBag3Line';
import { FiUser } from '@react-icons/all-files/fi/FiUser';
import { FaBars } from '@react-icons/all-files/fa/FaBars';
import logo from '../Hamburger/venia-logo.png';


function Hamburger(props) {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#172026' }}>
                <div className='navbar'>
                    <Link to='#' className='menu-bars menubar'>
                        <FaBars onClick={showSidebar} />
                    </Link>
                    <Link to='/' className='navbar__logo'>
                        <img src={logo} />
                    </Link>
                    <div className='header__icons navbar__icons'>
                        <ul>
                            <li>
                                <Link to='#' className='navbar__icons-search'>
                                    <FiSearch />
                                </Link>
                            </li>
                            <li className="itemnumbers">
                                <NavLink to="/cart">
                                    <RiShoppingBag3Line />{' '}
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
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <span>Shop Categories</span>
                            <Link to='#' className='menu-bars'>

                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {HamburgerData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>

                            );
                        })}
                        <li className='userlogin'>
                            <Link to='/signup'><FiUser/> Account</Link>
                            <Link to='/signin' className='signin'>Sign In</Link>
                        </li>
                    </ul>

                </nav>
            </IconContext.Provider>

        </>
    );
}

export default Hamburger;