import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import './card.css'
import logo from '../../assets/item2.webp'


function Card(props) {
  const history = useHistory(); 
  async function deleteProduct(){
    const response = await fetch("http://localhost:5000/products/delete/" + props.productkey, {method:'DELETE'})
    const data = await response.json();
    console.log(data)
  }

  return (
    <div className="Card">
      <div onClick={()=>history.push("/product?"+props.productkey)} className="Info">
        <img alt="product" src={logo} height={150}/>
        <h2 style={{color:'purple'}}>{props.productname}</h2>
        <p >{props.description}</p>
        <h3 style={{color:'gray'}}>R$ {props.price}</h3>
      </div>
      {props.admin
      ? 
        <>
          <div onClick={()=> deleteProduct()} className="Cart" style={{backgroundColor:'gray', top:0, height:'fit-content'}}>
            <p style={{padding:'5px', margin:'auto'}}>Editar Produto</p>
          </div>
          <div onClick={()=> deleteProduct()} className="Cart" style={{backgroundColor:'red'}}>
            <p style={{padding:'5px', margin:'auto'}}>Excluir Produto</p>
          </div>
        </>
      :
        <div className="Cart">
          <p style={{padding:'5px', margin:'auto'}}>+ Carrinho</p>
        </div>
      }
    </div>
  );
}

export default Card;