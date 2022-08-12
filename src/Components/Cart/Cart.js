import React, { useState } from 'react';
import '../Cart/Cart.css';
import { Link } from 'react-router-dom';
import paypal from '../../Components/Cart/PP_BTN.png';
import trash from '../../Components/Cart/trash.png';
import edit from '../../Components/Cart/edit.png';
import heart from '../../Components/Cart/heart.png';
import ControlledAccordions from '../Accordion/ControlledAccordions';
import { BsThreeDots } from '@react-icons/all-files/bs/BsThreeDots';
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";


export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 1500 ? 0 : 20;
    const [qty, setQty] = useState(1);

    // function onChange(e) {
    //     const v = e.target.value;
    //     if (v <= 0) setQty(0);
    //     else if (v >= 10) setQty(6);
    //     else setQty(v);
    // }
    // function decreaseQty(product) {
    //     if (qty <= 1) {
    //         setQty(1);
    //     } else {
    //         setQty(qty - 1);
    //     }
    // }

    // function increaseQty(product) {
    //     if (qty >= 10) {
    //         setQty(10);
    //     } else {
    //         setQty(qty + 1);
    //     }
    // }
    const totalPrice = qty * itemsPrice + taxPrice + shippingPrice;
    return (
        <section className="cart">
            <div className='container'>

                <div className='cart__content'>
                    {cartItems.length === 0 ? <div className='cart__content-empty'><img src="https://www.apnashopping.in/assets/img/payment/Empty-Cart.jpg" /></div> : (
                        <>
                            <center><h1>Your Shopping Bag</h1></center>
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12">
                                    {cartItems.map((item) => (
                                        <div className='cart__productlayout'>
                                            <div className="aem-Grid aem-Grid--12" key={item.id}>
                                                <div class="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--2">
                                                    <div className="cart__image">
                                                        <img src={item.image} />
                                                    </div>
                                                </div>
                                                <div className="aem-GridColumn aem-GridColumn--default--4">
                                                    <div className='cart__desktop'>
                                                        <span className='cart__details'>
                                                            <h5>{item.title}</h5>
                                                            <p>Size: Medium</p>
                                                            <p>Color: Storm</p>
                                                            <p>Price: ${item.price}</p>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="aem-GridColumn aem-GridColumn--default--3">
                                                    <div className='cart__desktop'>
                                                        <div className='cart__btn'>
                                                            {/* <p><b>Qty:</b>{item.qty} * ${item.price.toFixed(2)}</p>  */}
                                                            {/* <button className='btn-1' onClick={() => decreaseQty()} ><AiOutlineMinus /></button>
                                                            <input value={qty} onChange={(e) => onChange(e)} type="number" min="1" key={item.id} />
                                                            <button className='btn-1' onClick={() => increaseQty()}><AiOutlinePlus /></button> */}

                                                            <button className='btn-1' onClick={() => onRemove(item)} ><AiOutlineMinus /></button>
                                                            <h6 className="qty-input">{cartItems?.find((x) => x.id === item.id)?.qty || 1}</h6>
                                                            {/* <input value={qty} onChange={(e) => onChange(e)} type="number" min="1" key={item.id} /> */}
                                                            <button className='btn-1' onClick={() => onAdd(item)}><AiOutlinePlus /></button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="aem-GridColumn aem-GridColumn--default--3">
                                                    <div className='cart__desktop'>
                                                        <ul>
                                                            <li><Link to='#'><img src={edit} /> Edit</Link></li>
                                                            <li><Link to='#' onClick={() => onRemove(item)}><img src={trash} /> Remove</Link></li>
                                                            <li><Link to='#'><img src={heart} /> Save for later</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="aem-GridColumn aem-GridColumn--phone--8">
                                                    <div className='cart__mobile'>
                                                        <h5>{item.title}</h5>
                                                        <p>Size: Medium</p>
                                                        <p>Color: Storm</p>
                                                        <p>Price: ${item.price}</p>
                                                        <div className='cart__btn'>
                                                            {/* <p><b>Qty:</b>{item.qty} * ${item.price.toFixed(2)}</p>  */}
                                                            {/* <button className='btn-1' onClick={() => decreaseQty()}>-</button>
                                                            <input value={qty} onChange={(e) => onChange(e)} type="number" min="1" />
                                                            <button className='btn-1' onClick={() => increaseQty()}>+</button> */}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="aem-GridColumn aem-GridColumn--phone--2">
                                                    <div className='cart__mobile'>
                                                        <div className="dropdown">
                                                            <button className="dropbtn"><BsThreeDots /></button>
                                                            <div className="dropdown-content">
                                                                <Link to='#'><img src={edit} /></Link>
                                                                <Link to='#' onClick={() => onRemove(item)}><img src={trash} /></Link>
                                                                <Link to='#'><img src={heart} /></Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    <ControlledAccordions />
                                </div>
                                <div class="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
                                    <div className='cart__right'>
                                        <h4>Pricing Summary</h4>
                                        {cartItems.length !== 0 && (
                                            <>
                                                <div className="cart__right-subtotal">
                                                    <p>Price</p>
                                                    <p> ${qty * itemsPrice.toFixed(2)}</p>
                                                </div>
                                                <div className="cart__right-coupon">
                                                    <p>Coupon</p>
                                                    <p>-$0</p>
                                                </div>
                                                <div className="cart__right-giftcard">
                                                    <p>Giftcard</p>
                                                    <p>-$0</p>
                                                </div>
                                                <div className="cart__right-tax">
                                                    <p>Estimated tax</p>
                                                    <p>${taxPrice.toFixed(2)}</p>
                                                </div>
                                                <div className="cart__right-ship">
                                                    <p>Estimated shipping</p>
                                                    <p>${shippingPrice.toFixed(2)}</p>
                                                </div>
                                                <div className="cart__right-total">
                                                    <p>Estimated Total</p>
                                                    <p>${totalPrice.toFixed(2)}</p>
                                                </div>
                                                <div className='cart__right-buttons'>
                                                    <Link to='/checkout' className="button-primary checkbtn"><i className="fa fa-lock"></i>Checkout</Link>
                                                    <Link to='#'><img src={paypal} alt="paypal" /></Link>
                                                </div>

                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}
