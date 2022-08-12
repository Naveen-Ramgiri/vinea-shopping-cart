import React from 'react';
import '../Checkout/Checkout.css';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";
import instagram from '../Checkout/instagram.png';
import facebook from '../Checkout/facebook.png';
import twitter from '../Checkout/twitter.png';
import { useSelector } from 'react-redux';

function OrderSuccess(props) {
    const shippingAddress = useSelector((state) => state.orderDetails.shippingAddress);
    const shippingMethod = useSelector((state) => state.orderDetails.shippingMethod);
    const paymentInfo = useSelector((state) => state.orderDetails.paymentInfo);
    const { cartItems, onAdd, onRemove } = props;

    return (
        <div className='ordersuccessful'>
            <div className='container'>
                <center><h1>Order Successful!</h1></center>

                <div class="aem-Grid aem-Grid--12">

                    <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                        <h4>Order Number #1700834</h4>
                        <div className='ordersuccessful__info'>
                            <div class="aem-Grid aem-Grid--12">

                                <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                    <h6>Shipping Information</h6>
                                    <p>
                                        {shippingAddress.email}
                                    </p>
                                    <p>
                                        {shippingAddress.phoneNumber}
                                    </p>
                                    <div className='ordersuccessful__info-items'>
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
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <h6>Shipping Method</h6>
                                    <p>
                                        {shippingMethod}
                                    </p>
                                    <div className='ordersuccessful__info-items'>
                                        <h6>Payment Information</h6>
                                        <p>Credit Card
                                            {paymentInfo.paymentMethod}
                                        </p>
                                        <p>
                                            Visa ending in {paymentInfo.cardNumber?.substring(paymentInfo.cardNumber?.length - 4)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='ordersuccessful__info'>
                            <div class="aem-Grid aem-Grid--12">
                                <div className='shipmethods__info-details'>
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
                            </div>
                        </div>
                        <div className='ordersuccessful__message'>
                            <p>You will also receive an email with the details and we will let you know when your order has shipped.</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.</p>
                        </div>
                    </div>
                    <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                        <div className='checkout__right'>
                            <div className='ordersuccessful-summary'>
                                <h2>Give us a follow <br />to SAVE 20% <br />on your next order.</h2>
                                <div className='ordersuccessful__socialicons'>
                                    <Link to='#'><img src={instagram} alt="instagram" /></Link>
                                    <Link to='#'><img src={facebook} alt="facebook" /></Link>
                                    <Link to='#'><img src={twitter} alt="twitter" /></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSuccess