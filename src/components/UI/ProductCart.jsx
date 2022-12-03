import React from "react";
import { Col } from "reactstrap";
import "../../styles/productCard.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions }from "../../redux/slices/cartSlice";
import {  toast } from 'react-toastify';

const ProductCart = ({ item }) => {

const dispatch = useDispatch()

const addToCart =  ()=> {
  dispatch(cartActions.addItem({
    id : item.id,
    productName : item.productName,
    imgUrl : item.imgUrl,
    price : item.price,

  }))
  toast.success("Product added successful")
}



  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product_item">
        <div className="product_img">
          <motion.img whileHover={{ scale: 1.1 }} src={item.imgUrl} alt="" />
        </div>
        <div className="p-2 product_info">
          <h3 className="product_name">
            {" "}
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>{" "}
          </h3>
          <span className="text-center d-block">{item.category}</span>
        </div>
        <div className="product_card-bottom d-flex align-items-center justify-content-between p-2">
          <span className="price">${item.price}</span>
          <motion.span whileHover={{ scale: "1.3" }} onClick={addToCart}>
            <i className="ri-add-line"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCart;
