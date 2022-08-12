import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../Redux/actions/productsActions";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import '../ProductDetails/Productdetails.css';
import heart from '../ProductDetails/heart.png';
import { GiTreeBranch } from "react-icons/gi";
import { WiHot } from "react-icons/wi";
import { GiLindenLeaf } from "react-icons/gi";
import { HiDocumentDuplicate } from "react-icons/hi";
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";


const ProductDetails = (props) => {
  const { cartItems, onAdd, onRemove } = props;
  const { productId } = useParams();
  let products = useSelector((state) => {
    return state.allProducts.products;
  });
  const dispatch = useDispatch();
  const product = products.find(product => product.id == productId);
  const { image, title, price, category, description, rating, rate } = product;


  const fetchProductDetail = async (id) => {
    const response = await
      axios.get(`https://fakestoreapi.com/products/${id}`)
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 110) : text}
        <button onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "Read more" : " Read less"}
        </button>
      </p>
    );
  };

  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="productdetails">
          <div className="container">
            <div className="productdetails__right-breadcrumb mobile">
              <BreadCrumb />
            </div>
            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--1">
                <div className="productdetails__slider">
                  <img src={image} />
                  <img src={image} />
                  <img src={image} />
                  <img src={image} />
                  <img src={image} />
                  <div>
                    <Link to='#'>
                      <BsChevronDown />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                <div className="productdetails__left">
                  <img src={image} />
                </div>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
                <div className="productdetails__right">
                  <div className="productdetails__right-breadcrumb">
                    <BreadCrumb />
                  </div>

                  <h1 className="productdetails__right-title">{title}</h1>
                  <h4 className="productdetails__right-price">
                    ${price}
                  </h4>
                  <h5 className="productdetails__right-rating">{rating && rating.rate} <i className='fa fa-star'></i> <span>({rating.count})</span>
                  </h5>
                  <p className="productdetails__right-description"><ReadMore>{description}</ReadMore></p>
                  <hr />
                  <h5>Quantity</h5>
                  <div className="productdetails__right-quantity">
                    <button data-field="quantity" onClick={() => onRemove(product)}><AiOutlineMinus /></button>
                    <h6 className="qty-input">{cartItems?.find((x) => x.id === product.id)?.qty || 1}</h6>
                    <button className="increase-btn" onClick={() => onAdd(product)}><AiOutlinePlus /></button>
                  </div>
                  <button className="button-primary" onClick={() => onAdd(product)}>Add to Cart</button>
                  <div className="productdetails__right-share">
                    <ul>
                      <li><a href="#"><img src={heart} /> Save</a></li>
                      <li><a href="#"><i className="fa fa-share-alt" aria-hidden="true"></i> Share</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12">
                <div className="productdetails__left-desc">
                  <h2>{title}</h2>
                  <h5>Description</h5>
                  <p>{description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
