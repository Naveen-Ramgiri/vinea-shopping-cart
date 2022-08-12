import React, { useState } from 'react'
import '../Checkout/Checkout.css';
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setShippingMethod } from '../../Redux/actions/orderDetailsActions';

function Shipmethod(props) {

    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const [qty, setQty] = useState(1);
    const totalPrice = qty * itemsPrice + taxPrice + shippingPrice;

    const shippingAddress = useSelector((state) => state.orderDetails.shippingAddress);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleShippingMethod = (e) => {
        dispatch(setShippingMethod(e.target.value));
    }



    return (
        <div className='shipmethods'>
            <div className='container'>
                <center><h1>Checkout</h1></center>
                <h3>Guest Checkout</h3>
                <div class="aem-Grid aem-Grid--12">
                    <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                        <div className='shipmethods__info'>
                            <div class="aem-Grid aem-Grid--12">
                                <div className='shipmethods__info-details'>
                                    <h6>Shipping Information</h6><Link to='#'><span className='edit-desktop'><FiEdit2 /> Edit</span><span className='edit-mbl'><FiEdit2 /></span></Link>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <p>
                                        {shippingAddress.email}
                                    </p>
                                    <p className='mbl-number'>
                                        {shippingAddress.phoneNumber}
                                    </p>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <p>
                                        {shippingAddress.streetAddress}
                                    </p>
                                    <p>
                                        {shippingAddress.streetAddress1}
                                    </p>
                                    <p>
                                        {shippingAddress.state} {shippingAddress.zipcode}
                                    </p>
                                    <p>
                                        {shippingAddress.country}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='shipmethods__ships'>
                            <div>
                                <h4>2. Shipping Methods</h4>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" value=" Standard Shipping (4-8 business days via USPS) FREE" name="flexRadioDefault" id="flexRadioDefault1" onChange={handleShippingMethod} />
                                    <label class="form-check-label" for="flexRadioDefault1" className='label_text'>
                                        Standard Shipping (4-8 business days via USPS) FREE
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" value="Express Delivery (2-5 business days via USPS) $17.95" name="flexRadioDefault" id="flexRadioDefault2" onChange={handleShippingMethod} />
                                    <label class="form-check-label" for="flexRadioDefault2" className='label_text'>
                                        Express Delivery (2-5 business days via USPS) $17.95
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" value="Next Day Delivery (Next business days via FedEx) $53.61" name="flexRadioDefault" id="flexRadioDefault3" onChange={handleShippingMethod} />
                                    <label class="form-check-label" for="flexRadioDefault1" className='label_text'>
                                        Next Day Delivery (Next business days via FedEx) $53.61
                                    </label>
                                </div>
                                <div className='checkout-buttons'>
                                    <Link className='button-secondary desktop-btn' to="/payment">CONTINUE TO PAYMENT</Link>
                                    <Link className='button-secondary mobile-btn' to="/payment">CONTINUE</Link>
                                </div>
                            </div>

                            <div className='checkout__left-steps'>
                                <h4>3. Payment Information</h4>
                            </div>
                        </div>

                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <div className='checkout__right'>

                            <div className='checkout__right-summary'>
                                <h4>Price Summary</h4>
                                <div>
                                    <p>Price</p>
                                    <p> ${qty * itemsPrice.toFixed(2)}</p>
                                </div>
                                <div>
                                    <p>Coupon</p>
                                    <p>-$0</p>
                                </div>
                                <div>
                                    <p>Giftcard</p>
                                    <p>-$0</p>
                                </div>
                                <div>
                                    <p>Estimated tax</p>
                                    <p>${taxPrice.toFixed(2)}</p>
                                </div>
                                <div>
                                    <p>Estimated shipping</p>
                                    <p>${shippingPrice.toFixed(2)}</p>
                                </div>
                                <div className='summary-total'>
                                    <p>Estimated Total</p>
                                    <p>${totalPrice.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Shipmethod;