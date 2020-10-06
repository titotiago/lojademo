import React from 'react';
import Header from '../Header';
import './product.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'
import foto from "../../assets/item.webp"


function Product(props) {
  window.scrollTo(0, 0)
  return (
    <div>
      <Header/>
      <div className="product-page">
        <div className="product-display">
          <Carousel indicators={true}>
                <Carousel.Item>
                    <img
                    src={foto}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    src={foto}
                    alt="First slide"
                    />
                </Carousel.Item>
          </Carousel>
        </div>
        <div className="product-info">
            <h1>ESPONJA</h1>
            <p>Você vai adorar este produto!</p>
            <h2>R$ 100,00</h2>
            <div>
              Adicionar ao Carrinho
            </div>
        </div>
      </div>
    </div>
  );
}

export default Product;