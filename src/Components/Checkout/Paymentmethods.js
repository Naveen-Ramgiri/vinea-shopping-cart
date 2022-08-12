import React, { useState } from 'react';
import '../Checkout/Checkout.css';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setPaymentInfo } from '../../Redux/actions/orderDetailsActions';

function Paymentmethods(props) {

    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const [qty, setQty] = useState(1);
    const totalPrice = qty * itemsPrice + taxPrice + shippingPrice;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const shippingAddress = useSelector((state) => state.orderDetails.shippingAddress);
    const shippingMethod = useSelector((state) => state.orderDetails.shippingMethod);


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();

    const onSubmit = (data) => {
        dispatch(setPaymentInfo(data));
        navigate('/review');
    };

    return (
        <div className='paymentmethods'>
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
                        <div className='shipmethods__ships'>
                            <div>
                                <h4>3. Payment Methods</h4>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-check">
                                        <label htmlFor="creditcard" className='xyz'>
                                            <input
                                                {...register('creditcard', { required: true })}
                                                type="radio"
                                                name="creditcard"
                                                className="form-check-input card-radio"
                                            />{' '}
                                            Credit Card
                                        </label>
                                    </div>
                                    <div class="aem-Grid aem-Grid--12">
                                        <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                            <div className="form-group">
                                                <label className="col-form-label">Name on Card</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.name && "invalid"}`}
                                                    {...register("fname", { required: "There is an error that relates to this field" })}
                                                    onKeyUp={() => {
                                                        trigger("fname");
                                                    }}
                                                />
                                                {errors.fname && (
                                                    <small className="text-danger">{errors.fname.message}</small>
                                                )}
                                            </div>
                                            <div className='form-group'>
                                                <label className="col-form-label">Credit Card Number</label>
                                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=" "
                                                    {...register("cardNumber", {
                                                        required: "Please enter cardnumber"
                                                    })}
                                                    onKeyUp={() => {
                                                        trigger("cardNumber");
                                                    }}
                                                />
                                                {errors.cardNumber && (
                                                    <small className="text-danger">{errors.cardNumber.message}</small>
                                                )}
                                            </div>
                                            <div className='state-align'>
                                                <div class="aem-Grid aem-Grid--12">
                                                    <div class="aem-GridColumn aem-GridColumn--default--8">
                                                        <div className="form-group">
                                                            <label className="col-form-label">Expiration Date</label>
                                                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div class="aem-GridColumn aem-GridColumn--default--4">
                                                        <div className="form-group">
                                                            <label className="col-form-label">CVV</label>
                                                            <div className='cvv'>
                                                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="91001" />
                                                                <span>
                                                                    <AiOutlineQuestionCircle />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='form save-card'>
                                                <input type="checkbox" /> Billing address same as shipping address
                                            </div>
                                        </div>
                                        <div class="aem-GridColumn aem-GridColumn--default--6"></div>
                                    </div>
                                    <div className='checkout__left-steps'>
                                        <div className="form-check paypal-check">
                                            <label htmlFor="payment" className='paypal-label'>
                                                <input
                                                    {...register('standard', { required: true })}
                                                    type="radio"
                                                    name="payment"
                                                    className="form-check-input"
                                                />{' '}
                                                Paypal
                                            </label>
                                        </div>

                                        <div className='checkout-buttons'>
                                            <button className='button-secondary desktop-btn'>CONTINUE TO REVIEW ORDER</button>
                                            <button className='button-secondary mobile-btn'>CONTINUE</button>
                                        </div>
                                    </div>
                                </form>
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

export default Paymentmethods