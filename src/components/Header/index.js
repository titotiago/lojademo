import React from 'react';
import './header.css'
import Expand from 'react-expand-animated'
import { useHistory } from "react-router-dom";
import { useState } from 'react'
import logo from '../../assets/logo2.png'
import { Form } from 'react-bootstrap/';



function Header() {
  const [expandDiv, setExpandDiv] = useState(false);
  const history = useHistory();

  function handleExpand(state){
    setExpandDiv(state);
  }

  return (
    <div onMouseLeave={()=>handleExpand(false)} onMouseEnter={()=>handleExpand(true)} className="header-div">
      <div  className="search-bar">
        <img className="logo-div" onClick={()=>history.push('/')} src={logo} alt="logo" height={120}/>
        <Form.Control className="search-input" type="text" placeholder="O que você procura? ;)" />
        <div className="searchbar-items">
          <h2 className="searchbar-text">Meus Pedidos</h2>
          <h2 className="searchbar-text">Carrinho</h2>
        </div>
      </div>

      
        <div className="products-div">
          <h2 className="header-text">Delineadores</h2>
          <h2 className="header-text">Sombras</h2>
          <h2 className="header-text">Primer</h2>
          <h2 className="header-text">Base</h2>
          <h2 className="header-text">Iluminadores</h2>
          <h2 className="header-text">Pó</h2>
          <h2 className="header-text">Corretivo</h2>
        </div>
    </div>
  );
}

export default Header;
