import React from "react";
import "./header.css";
import { Col, Container, Row } from "reactstrap";
import logo from "../../assets/img/shop.png";
import userIcon from "../../assets/img/user.png";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import useAuth from "../../custom-hooks/useAuth";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const nav_links = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
  {
    path: "accessory",
    display: "Accessory",
  },
];

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const navigate = useNavigate();
  const profileActionRef = useRef(null);
  const { currentUser } = useAuth();


  const navigateToCart = () => {
    navigate("/cart");
  };

  const toggleProfileActions = () =>
    profileActionRef.current.classList.toggle("show_profileActions");

  const logOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout  success");
        navigate("/home");
      })
      .catch((error) => {
        toast.success(error.message);
      });
  };

  return (
    <header className="header">
      <Container>
        <Row>
          <Col>
            <div className="nav_wrapper">
              <div className="logo">
                <Link to="/home">
                <img src={logo} alt="" />
                </Link> 
              </div>
              <div className="navigation">
                <ul className="menu">
                  {nav_links.map((item, index) => (
                    <li className="nav_item" key={index}>
                      <NavLink
                        to={item.path}
                        className={(navClass) =>
                          navClass.isActive ? "nav_active" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="nav_icons">
                <span className="fav_icon">
                  {" "}
                  <i class="ri-heart-line"></i> <span className="badge">1</span>
                </span>
                <span className="cart_icon">
                  {" "}
                  <i
                    className="ri-shopping-cart-fill"
                    onClick={navigateToCart}
                  ></i>{" "}
                  <span className="badge">{totalQuantity}</span>
                </span>
                <div className="profile">
                  {" "}
                  
                  <motion.img
                    whileTap={{ scale: 1.1 }}
                    src={currentUser ? currentUser.photoURL : userIcon}
                    alt=""
                    onClick={toggleProfileActions}
                  />{" "}
                  <div
                    className="profile_actions"
                    ref={profileActionRef}
                    onClick={toggleProfileActions}
                  >
                    {currentUser ? (
                      <span onClick={logOut}>Logout</span>
                    ) : (
                      <div className="d-flex align-items-center justify-content-center flex-column">
                        <Link to="/signup">Signup</Link>
                        <Link to="/login">Login</Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mobile_menu">
                <span>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
