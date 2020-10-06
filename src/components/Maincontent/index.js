import React, { useState,  useCallback, useEffect} from 'react';
import Card from '../Card';
import './maincontent.css'
import foto from "../../assets/03.jpg"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from 'react-bootstrap/Carousel'
import Spinner from 'react-spinner-material';



function Maincontent(){
    const [productsResult, setProductsResult] = useState([]);
  
    async function  callAPI(){
        const response  = await fetch("http://localhost:5000/products/")
        const data = await response.json();
        setProductsResult(data);
    }

    useEffect(() => {
        onRender();
    })

    const onRender = useCallback(() => {
        callAPI();
    }, [])    

    return(
        <div className="main-content-div">
            <div className="slideshow">
            <Carousel indicators={false}>
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
            <hr className="divider"></hr>
            <div className="products-name">TODOS OS PRODUTOS</div>
            <hr></hr>
            <div className="store-div">
                <div className="filters-div">
                    <ul>
                        <h3 style={{color:'purple'}}>Preço</h3>
                        <li>0-25</li>
                        <li>25-50</li>
                        <li>50-100</li>
                        <li>100-200</li>
                    </ul>
                    <ul>
                        <h3 style={{color:'purple'}}>Marca</h3>
                        <li>AAA</li>
                        <li>blublu</li>
                        <li>blé blu blu</li>
                        <li>Ruby rose</li>
                    </ul>
                </div>
                {productsResult.length === 0 ?
                    <span className="spinner-properties">
                        <Spinner color={'white'} stroke={10} radius={100} />
                    </span>
                    :
                    null
                }
                <div className="cards-div">
                    {
                        productsResult.length > 0 ? 
                            productsResult.map(product =>{
                                return <Card cart={true} productname={product.title} price={product.value} description={product.description} productkey={product.key}/>
                            })
                        : 
                            null
                    }                  
                </div>
            </div>
            <div className="footer">
                <ul className="footer-block">
                    <h6>Quem somos nós?</h6>
                    <p>Pirulero piro bla bla bla design maquiagem</p>
                </ul>
                <ul className="footer-block">
                    <h6>Entre em contato</h6>
                    <h6>(87)9999-9999</h6>
                </ul>
                <ul className="footer-block">
                    <h6>Desenvolvido por</h6>
                    <h6>github.com/titotiago</h6>
                    <h6>linkedin.com/titotiago</h6>
                </ul>
            </div>
        </div>
    )
}

export default Maincontent;