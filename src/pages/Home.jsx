import React , {useState , useEffect} from "react";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../assets/img/hero-img.png"
import "../styles/home.css"
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import Services from "../services/Services";
import Helmet from "../components/Helmet/Helmet";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/product"
import counterImg from "../assets/img/counter-timer-img.png"
import Clock from "../components/UI/Clock"


const Home = () => {

  const [trendingProducts, setTrendingProducts] = useState([])
  const [bestSalesProducts, setBestSaleProducts] = useState([])
  const [mobileProducts, setMobileProducts] = useState()
  const [wireless, setWireless] = useState()
  const [watch, setWatch] = useState()


  useEffect(() => {
    const filteredTrendingProducts = products.filter((item) => item.category === "chair")
    const filteredBestProducts = products.filter((item) => item.category === "sofa")
    const filteredMobileProducts = products.filter((item) => item.category ==="mobile")
    const filteredWirelessProducts = products.filter((item) => item.category=== "wireless" )
    const filteredWatchProducts = products.filter((item) => item.category === "watch")
     setTrendingProducts(filteredTrendingProducts)
     setBestSaleProducts(filteredBestProducts)
     setMobileProducts(filteredMobileProducts)
     setWireless(filteredWirelessProducts)
     setWatch(filteredWatchProducts)
  },[])


  return  <Helmet title={"Home"}>
    <section className="hero_section">
      <Container>
        <Row>
          <Col>
            <div className="hero_content">
              <p className="hero_subtitle">Trending product in</p>
              <h2>Lorem ipsum dolor sit amet.</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
                suscipit accusantium nostrum omnis nemo ipsa delectus
                exercitationem iusto illo est.
              </p>
              <motion.button whileTap={{scale : 1.2}} className="buy_btn mt-5"> <Link to="/shop"> Shop Now</Link></motion.button>
            </div>
          </Col>
          
          <Col>
           <div className="hero_img">
            <img src={heroImg} alt="heroImg" />
           </div>
          </Col>

        </Row>
      </Container>
    </section>
   
    <section className="trending_products p-5">
      <Container>
        <Row>
          <Col lg="12" className="text-center">
           <h2 className="section_title">Trending Products</h2>
          </Col>    
          <ProductList data ={trendingProducts}/>
        </Row>
      </Container>
    </section> 

      <section className="trending_products p-5">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Best Sales</h2>
            </Col>
            <ProductList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer_count ">
        <Container>
          <Row>
            <Col lg="6" md="6">
            <div className="clock_top-content p-2">
              <h4 className="text-white fs-6 mb-2 ">Limited Offers</h4>
              <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
            </div>
            <Clock/>
            <div className="p-4">
             <motion.button whileTap={{scale : 1.2}} className="buy_btn store_btn  ">
            
              <Link to="/shop">Visit Store</Link>
             </motion.button>
             </div>
            </Col>
            <Col lg="6" md="6" className="text-end">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="trending_products p-5">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">New Arrivals</h2>
            </Col>
            <ProductList data={mobileProducts} />
            <ProductList data={wireless} />
          </Row>
        </Container>
      </section>
      <section className="trending_products p-5">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="section_title">Watch Category</h2>
            </Col>
            <ProductList data={watch} />
          
          </Row>
        </Container>
        <Services/>
      </section>
        
    </Helmet>

};

export default Home;
