import React, { useEffect, useCallback, useMemo, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../../Redux/actions/productsActions";
import BreadcrumbPage from "../../BreadCrumb/BreadCrumb";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import men from "../../ProductListing/MenProductListings/men.png";
import Men from "../Men/men";
import { BiSort } from "react-icons/bi";
import { FaArrowsAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { BiSortAlt2 } from "react-icons/bi";
import { Modal, Button } from "react-bootstrap";
import sliders from '../MenProductListings/sliders.png';
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState([]);
  const updatedList = products.filter((value) => value.category === "men's clothing");
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;
  const filterHandler = (checked, path) => {
    if (checked) {
      return navigate(path)
    }
    return null;
  }
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")

    dispatch(setProducts(response.data));
    console.log(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="productlisting">
        <div className="productlisting-mobile">
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--phone--12">
              <div className="productlisting__image men">
                <img src={men} alt="men" />
              </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--phone--12">
              <div className="productlisting__title">
                <h3>Men’s Outerwear</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="productlisting-desktop">
          <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--4">
              <div className="productlisting__title">
                <h3>Men's <br /> Outerwear</h3>
              </div>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--8">
              <div className="productlisting__image">
                <img src={men} alt="men" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="breadcrumbslist">
            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12">
                <BreadCrumb />
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                <div className="product-filter">
                  <button className="secondary-button" onClick={handleShow}><img src={sliders} alt="filter" /> Filter Results</button>
                  <Modal className="right" show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Filters</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <hr />
                      <label><input type="checkbox" onChange={(e) => filterHandler(e.target.checked, "/jewellery")} checked={pathname == "/jewellery"} id="option" name="option" value="option" /> Jewellery</label><br />
                      <label><input type="checkbox" onChange={(e) => filterHandler(e.target.checked, "/electronics")} checked={pathname == "/electronics"} id="option" name="option" value="option" /> Electronics</label><br />
                      <label><input type="checkbox" onChange={(e) => filterHandler(e.target.checked, "/men")} checked={pathname == "/men"} id="option" name="option" value="option" /> Men's Clothing</label><br />
                      <label><input type="checkbox" onChange={(e) => filterHandler(e.target.checked, "/women")} checked={pathname == "/women"} id="option" name="option" value="option" /> Women's Clothing</label>
                      <hr />
                    </Modal.Body>
                  </Modal>
                  <button className="secondary-button"><BiSortAlt2 /> Sort Ptoducts</button>
                </div>
                <div className="breadcrumbslist__filter">
                  <p>{updatedList.length} Products</p>
                  <div className="breadcrumbslist__sort">
                    <select>
                      <option>Sort by Latest</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="productfilter">
            <div className="aem-Grid aem-Grid--12">
              <div className="aem-GridColumn aem-GridColumn--default--3">
                <div className="productfilters">
                  <h4>Filters</h4>
                  <p>Categories</p>
                  <label><input type="checkbox" onChange={(e) => filterHandler(e.target.checked, "/jewellery")} checked={pathname == "/jewellery"} id="option" name="option" value="option" />Jewellery</label>
                  <label><input type="checkbox" onChange={(e) => filterHandler(e.target.checked, "/electronics")} checked={pathname == "/electronics"} id="option" name="option" value="option" />Electronics</label>
                  <label><input type="checkbox" onChange={(e) => filterHandler(e.target.checked, "/men")} checked={pathname == "/men"} id="option" name="option" value="option" />Men's Clothing</label>
                  <label><input type="checkbox" onChange={(e) => filterHandler(e.target.checked, "/women")} checked={pathname == "/women"} id="option" name="option" value="option" />Women's Clothing</label>
                </div>
              </div>
              <div className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--phone--12">
                <Men />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
