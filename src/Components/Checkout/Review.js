import React, { useState } from 'react';
import '../Checkout/Checkout.css';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";
import { useSelector } from 'react-redux';

function Review(props) {

    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const [qty, setQty] = useState(1);
    const totalPrice = qty * itemsPrice + taxPrice + shippingPrice;

    const shippingAddress = useSelector((state) => state.orderDetails.shippingAddress);
    const shippingMethod = useSelector((state) => state.orderDetails.shippingMethod);
    const paymentInfo = useSelector((state) => state.orderDetails.paymentInfo);

    return (
        <div className='revieworder'>
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
                        <div className='shipmethods__info'>
                            <div class="aem-Grid aem-Grid--12">
                                <div className='shipmethods__info-details'>
                                    <h6>Shipping Method</h6><Link to='#'><span className='edit-desktop'><FiEdit2 /> Edit</span><span className='edit-mbl'><FiEdit2 /></span></Link>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <p>
                                        {shippingMethod}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='shipmethods__info'>
                            <div class="aem-Grid aem-Grid--12">
                                <div className='shipmethods__info-details'>
                                    <h6>Payment Information</h6><Link to='#'><span className='edit-desktop'><FiEdit2 /> Edit</span><span className='edit-mbl'><FiEdit2 /></span></Link>
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <p>Credit Card
                                        {paymentInfo.paymentMethod}
                                    </p>
                                    <p>
                                        Visa ending in {paymentInfo.cardNumber?.substring(paymentInfo.cardNumber?.length - 4)}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='shipmethods__info'>
                            <div class="aem-Grid aem-Grid--12">
                            <div className='shipmethods__info-details totalitems'>
                                    <h6>{cartItems.length} items in your order</h6>
                                </div>
                                {cartItems.length === 0 ? <h5 className='emptybasket'>Basket is empty</h5> :
                                    <>{cartItems?.map((item) => (
                                        <>
                                        
                                            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                <div className='items-inorder'>
                                                    <img src={item.image} />
                                                    <div>
                                                        <h6>{item.title}</h6>
                                                        <p>Quantity: {item.qty}</p>
                                                        <p>Price: ${item.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    ))}</>
                                }
                                {/* <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                    <div className='items-inorder'>
                                        <img src="https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg" />
                                        <div>
                                            <h6>Signature Sports Bra</h6>
                                            <p>Size: Medium</p>
                                            <p>Color: Red</p>
                                            <p>Quantity: 1</p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className='checkout-buttons'>
                            <Link className='button-primary' to="/orderconfirmation">PLACE ORDER</Link>

                            <p>By clicking confirm order you agree to our <Link to='#'>Terms and Conditions</Link></p>
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

export default Review