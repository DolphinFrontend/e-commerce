import React from "react";
import { Container, Col, Row, FormGroup, Form } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { useSelector } from "react-redux";
import "../styles/checkout.css";

const Checkout = () => {

  const totalQty = useSelector((state) => state.cart.totalQty)
  const totalAmount = useSelector((state) => state.cart.totalAmount)



  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6 className="mb-4 fw-bold mt-3">Billing Information</h6>
              <Form className="billing_form ">
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your mail" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your Phone Number" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Street Address" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="City" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Postal Code" />
                </FormGroup>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Country" />
                </FormGroup>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout_cart mt-5">
                <h6>
                  Total Qty : <span>{totalQty}</span>{" "}
                </h6>
                <h6>
                  Subtotal : <span>${totalAmount}</span>{" "}
                </h6>
                <h6>
                  Shipping : <br />free shipping <span>$0</span>{" "}
                </h6>
               
                <h4>
                  Total Qty : <span>${totalAmount}</span>{" "}
                </h4>
                <button className="buy_btn auth_btn w-100 mt-5 fw-bold ">Place an order</button>
              </div>
            
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
