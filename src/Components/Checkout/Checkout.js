import React, { useState } from 'react'
// import CheckoutAccordion from './CheckoutAccordion';
import '../Checkout/Checkout.css';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setShippingAddress } from '../../Redux/actions/orderDetailsActions';

function Checkout(props) {

    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 1500 ? 0 : 20;
    const [qty, setQty] = useState(1);
    const totalPrice = qty * itemsPrice + taxPrice + shippingPrice;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();

    const onSubmit = (data) => {
        dispatch(setShippingAddress(data));
        navigate('/shipmethod');
    };

    return (
        <>
            <div className='checkout'>
                <div className='container'>
                    <center><h1>Checkout</h1></center>
                    <div class="aem-Grid aem-Grid--12">
                        <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                            <div className='checkout__left'>
                                <div className='checkout__left-guest'>
                                    <h3>Guest Checkout</h3>
                                    <h4>Contact information</h4>
                                    <p>We’ll use these details to keep you informed on your delivery.</p>
                                </div>
                                <div className='checkout__left-shipinfo'>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div class="aem-Grid aem-Grid--12">
                                            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                <div className="form-group">
                                                    <label for="exampleFormControlInput1" className="col-form-label">Email</label>
                                                    <input
                                                        type="text"
                                                        placeholder='abc@gmail.com'
                                                        className={`form-control ${errors.email && "invalid"}`}
                                                        {...register("email", {
                                                            required: "Please enter email",
                                                            pattern: {
                                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                message: "Invalid Email address",
                                                            }
                                                        })}
                                                        onKeyUp={() => {
                                                            trigger("email");
                                                        }}
                                                    />
                                                    {errors.email && (
                                                        <small className="text-danger">{errors.email.message}</small>
                                                    )}
                                                </div>
                                            </div>
                                            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                <div className="form-group">
                                                    <label for="Phone Number1" className="col-form-label">Phone Number</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.phoneNumber && "invalid"}`}
                                                        placeholder='2222222222'
                                                        {...register("phoneNumber", {
                                                            required: "Please enter phone number",
                                                            maxLength: {
                                                                value: 10,
                                                                message: 'error message' // JS only: <p>error message</p> TS only support string
                                                            }
                                                        })}
                                                        onKeyUp={() => {
                                                            trigger("phoneNumber");
                                                        }}
                                                    />
                                                    {errors.phoneNumber && (
                                                        <small className="text-danger">{errors.phoneNumber.message}</small>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <h4>1. Shipping Information</h4>
                                        <div class="aem-Grid aem-Grid--12">
                                            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                <div className="form-group">
                                                    <label for="exampleFormControlInput1" className="col-form-label">Country</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.countryName && "invalid"}`}
                                                        {...register("countryName", { required: "Please enter the country" })}
                                                        onKeyUp={() => {
                                                            trigger("countryName");
                                                        }}
                                                    />
                                                    {errors.countryName && (
                                                        <small className="text-danger">{errors.countryName.message}</small>
                                                    )}
                                                </div>
                                            </div>
                                            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                <div className="form-group blank-space">
                                                    <label className="col-form-label">First name</label>
                                                    <input
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                <div className="form-group">
                                                    <label for="exampleFormControlInput1" className="col-form-label">First name</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.fname && "invalid"}`}
                                                        {...register("fname", { required: "Please enter first name" })}
                                                        onKeyUp={() => {
                                                            trigger("fname");
                                                        }}
                                                    />
                                                    {errors.fname && (
                                                        <small className="text-danger">{errors.fname.message}</small>
                                                    )}
                                                </div>
                                            </div>
                                            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                <div className="form-group">
                                                    <label for="exampleFormControlInput1" className="col-form-label">Last name</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.lname && "invalid"}`}
                                                        {...register("lname", { required: "Please enter last name" })}
                                                        onKeyUp={() => {
                                                            trigger("lname");
                                                        }}
                                                    />
                                                    {errors.lname && (
                                                        <small className="text-danger">{errors.lname.message}</small>
                                                    )}
                                                </div>
                                            </div>
                                            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                <div className="form-group">
                                                    <label for="exampleFormControlInput1">Street Address</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.streetAddress && "invalid"}`}
                                                        {...register("streetAddress", {
                                                            required: "Please enter address"
                                                        })}
                                                        onKeyUp={() => {
                                                            trigger("streetAddress");
                                                        }}
                                                    />
                                                    {errors.streetAddress && (
                                                        <small className="text-danger">{errors.streetAddress.message}</small>
                                                    )}
                                                </div>
                                            </div>
                                            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                <div className="form-group">
                                                    <label for="exampleFormControlInput1">Street Address 2</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.streetAddress1 && "invalid"}`}
                                                        {...register("streetAddress1", {
                                                            required: "Please enter address 2"
                                                        })}
                                                        onKeyUp={() => {
                                                            trigger("streetAddress1");
                                                        }}
                                                    />
                                                    {errors.streetAddress1 && (
                                                        <small className="text-danger">{errors.streetAddress1.message}</small>
                                                    )}
                                                </div>
                                            </div>
                                            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                <div className="form-group">
                                                    <label for="exampleFormControlInput1">City</label>
                                                    <input
                                                        type="text" placeholder="Altadena"
                                                        className={`form-control ${errors.city && "invalid"}`}
                                                        {...register("city", {
                                                            required: "Please enter the country"
                                                        })}
                                                        onKeyUp={() => {
                                                            trigger("city");
                                                        }}
                                                    />
                                                    {errors.city && (
                                                        <small className="text-danger">{errors.city.message}</small>
                                                    )}
                                                </div>
                                            </div>
                                            <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                                                <div className='state-align'>
                                                    <div class="aem-Grid aem-Grid--12">
                                                        <div class="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                                                            <div className="form-group">
                                                                <label className="col-form-label">State</label>
                                                                <input
                                                                    type="text"
                                                                    className={`form-control ${errors.state && "invalid"}`}
                                                                    {...register("state", {
                                                                        required: "Please enter state"
                                                                    })}
                                                                    onKeyUp={() => {
                                                                        trigger("state");
                                                                    }}
                                                                />
                                                                {errors.state && (
                                                                    <small className="text-danger">{errors.state.message}</small>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                                            <div className="form-group">
                                                                <label className="col-form-label">ZIP</label>
                                                                <input
                                                                    type="text" placeholder="91001"
                                                                    className={`form-control ${errors.zipcode && "invalid"}`}
                                                                    {...register("zipcode", {
                                                                        required: "Please enter the zip code"
                                                                    })}
                                                                    onKeyUp={() => {
                                                                        trigger("zipcode");
                                                                    }}
                                                                />
                                                                {errors.zipcode && (
                                                                    <small className="text-danger">{errors.zipcode.message}</small>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='checkout-buttons'>
                                                <button type="submit" className='button-secondary desktop-btn'>CONTINUE TO SHIPPING METHOD</button>
                                                <button type="submit" className='button-secondary mobile-btn'>CONTINUE</button>
                                            </div>
                                        </div>
                                        <div className='checkout__left-steps'>
                                            <h4>2. Shipping Method</h4>
                                            <h4>3. Payment Information</h4>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                            <div className='checkout__right'>
                                <div className='checkout__right-signin'>
                                    <h5>Sign in for Express Checkout</h5><button className='button-secondary'>SIGN IN</button>
                                </div>
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
        </>
    )
}

export default Checkout;