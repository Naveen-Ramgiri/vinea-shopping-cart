import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import SwipeableTextMobileStepper from '../Slider/Slider';
import SwipeableTextMobileStepper1 from '../Slider/SliderMobile';
import signature from '../Home/home3.png';
import conquer from '../Home/home4.png';
import { FiMapPin } from "react-icons/fi";


function Home() {
    return (
        <section className='home'>
            <div className='slider__desktop'>
                <SwipeableTextMobileStepper />
            </div>
            <div className='slider__mobile'>
                <SwipeableTextMobileStepper1 />
            </div>
            <div className='categories-desktop'>
                <div className='home__categories'>
                <div className='container'>
                    <div class="aem-Grid aem-Grid--12">
                        <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                            <Link to='/women'>
                                <div className='home__categories-type'>
                                    <div className='categoryname'>
                                        <h3>Shop Women</h3>
                                        <p>Lorem Ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                            <Link to='/men'>
                                <div className='home__categories-type1'>
                                    <div className='categoryname'>
                                        <h3>Shop Men</h3>
                                        <p>Lorem Ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                            <Link to='/jewellery'>
                                <div className='home__categories-type2'>
                                    <div className='categoryname'>
                                        <h3>Jewellery</h3>
                                        <p>Lorem Ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
                            <Link to='/electronics'>
                                <div className='home__categories-type3'>
                                    <div className='categoryname'>
                                        <h3>Electronics</h3>
                                        <p>Lorem Ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
            <div className='categories-tablet'>
            <div className='home__categories'>
                <div className='container'>
                    <div class="aem-Grid aem-Grid--12">
                        <div class="aem-GridColumn aem-GridColumn--default--6">
                            <Link to='/women'>
                                <div className='home__categories-type'>
                                    <div className='categoryname'>
                                        <h3>Shop Women</h3>
                                        <p>Lorem Ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--6">
                            <Link to='/men'>
                                <div className='home__categories-type1'>
                                    <div className='categoryname'>
                                        <h3>Shop Men</h3>
                                        <p>Lorem Ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--6">
                            <Link to='/jewellery'>
                                <div className='home__categories-type2'>
                                    <div className='categoryname'>
                                        <h3>Jewellery</h3>
                                        <p>Lorem Ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="aem-GridColumn aem-GridColumn--default--6">
                            <Link to='/electronics'>
                                <div className='home__categories-type3'>
                                    <div className='categoryname'>
                                        <h3>Electronics</h3>
                                        <p>Lorem Ipsum dolor sit amet</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            <div className='signature__desktop'>
                <div className='product__signature'>
                    <div className='container'>
                        <div class="aem-Grid aem-Grid--12">
                            <div class="aem-GridColumn aem-GridColumn--default--7">
                                <div className='product__signature-left'>
                                    <h2>
                                        Take off in the new <br /> Signature Legging
                                    </h2>
                                    <h5>Lorem Ipsum Dolor Tempor</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.
                                    </p>
                                    <div className='product__signature-buttons'>
                                        <button className='button-secondary'>SHOP COLLECTION</button> <button className='button-primary primary'>SHOP NOW</button>
                                    </div>
                                </div>
                            </div>
                            <div class="aem-GridColumn aem-GridColumn--default--5">
                                <div className='product__signature-right'>
                                    <img src={signature} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='signature__mobile'>
                <div className='product__signature'>
                    <div className='container'>
                        <div class="aem-Grid aem-Grid--12">
                            <div class="aem-GridColumn aem-GridColumn--phone--12">
                                <div className='product__signature-right'>
                                    <img src={signature} />
                                </div>
                            </div>
                            <div class="aem-GridColumn aem-GridColumn--phone--12">
                                <div className='product__signature-left'>
                                    <h2>
                                        Take off in the new Signature Legging
                                    </h2>
                                    <h5>Lorem Ipsum Dolor Tempor</h5>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.
                                    </p>
                                    <div className='product__signature-buttons'>
                                        <button className='button-secondary'>SHOP COLLECTION</button> <button className='button-primary primary'>SHOP NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='conqueradventure__desktop'>
                <div className="conqueradventure">
                    <div className='container'>
                        <div className="conquer">
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--default--8">
                                    <div className="conquer__image">
                                        <img src={conquer} alt="women" />
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--default--4">
                                    <div className="conquer__title">
                                        <h3>Conquer your next adventure</h3>
                                        <p>Lorem Ipsum Dolor Tempor</p>
                                        <button className='shop-btn'>SHOP DEVICES</button>
                                        <div className='conquer__navigate'>
                                            <FiMapPin size={40} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='conqueradventure__mobile'>
                <div className="conqueradventure">
                    <div className='container'>
                        <div className="conquer">
                            <div className="aem-Grid aem-Grid--12">
                                <div className="aem-GridColumn aem-GridColumn--phone--12">
                                    <div className="conquer__image">
                                        <img src={conquer} alt="women" />
                                        <div className='conquer__navigate1'>
                                            <FiMapPin size={30} />
                                        </div>
                                    </div>
                                </div>
                                <div className="aem-GridColumn aem-GridColumn--phone--12">

                                    <div className="conquer__title">
                                        <h3>Conquer your next adventure</h3>
                                        <p>Lorem Ipsum Dolor Tempor</p>
                                        <button className='shop-btn'>SHOP DEVICES</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;