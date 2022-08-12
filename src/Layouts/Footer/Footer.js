import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';
import instagram from '../Footer/instagram.png';
import facebook from '../Footer/facebook.png';
import twitter from '../Footer/twitter.png';
import "../../Css/aem-grid.css";
import logo from '../Footer/venia-logo.png';

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='container'>
                    <div className="aem-Grid aem-Grid--12">
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                            <div className='footer__account'>
                                <h4>Account</h4>
                                <ul>
                                    <li><Link to="#">Sign In</Link></li>
                                    <li><Link to="/signup">Register</Link></li>
                                    <li><Link to="#">Order Status</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                            <div className='footer__about'>
                                <h4>About Us</h4>
                                <ul>
                                    <li><a href='#'>Our Story</a></li>
                                    <li><a href='#'>Careers</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                            <div className='footer__help'>
                                <h4>Help</h4>
                                <ul>
                                    <li><a href='#'>Contact Us</a></li>
                                    <li><a href='#'>Order Status</a></li>
                                    <li><a href='#'>Returns</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                            <div className='footer__follow'>
                                <h4>Follow Us!</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                </p>
                                <ul className='footer__social-links'>
                                    <li><a href="#"><img src={instagram} /></a></li>
                                    <li><a href="#"><img src={facebook} /></a></li>
                                    <li><a href="#"><img src={twitter} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer__copyrights'>
                    <div className='container'>
                        <div className='copyrights__content'>
                            <Link to="/"><span>V</span><span>ENIA</span></Link>
                            <p>&copy; Company Name Address Ave, City Name, State ZIP</p>
                            <ul>
                                <li><a href='#'>Terms of Use</a></li>
                                <li><a href='#'>Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer__mobile'>
                    <div className='footer__copyrights'>
                        <div className='container'>
                            <div className='copyrights__content'>
                                <ul>
                                    <li><a href='#'>Terms of Use</a></li>
                                    <li><a href='#'>Privacy Policy</a></li>
                                </ul>
                                <p>&copy; Company Name Address Ave, City Name, State ZIP</p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
}
export default Footer;