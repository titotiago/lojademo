import React, {useState, useCallback, useEffect} from 'react';
import Header from '../Header';
import Card from '../Card';
import Spinner from 'react-spinner-material';
import './admin.css'


function Admin() {
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


return (
    <div className="App">
        <Header/>
        <div className="admin-div">
        <p hidden={productsResult.length === 0} className="add-product">+ ADICIONAR PRODUTO </p>
            {productsResult.length > 0 ? productsResult.map(product =>{
                return <Card admin={true} productname={product.title} price={product.value} description={product.description} productkey={product.key}/>
            })
            :
            <span className="spinner-properties">
                <Spinner color={'white'} stroke={10} radius={100} />
            </span>
            }
        </div>
    </div>
  );
}

export default Admin;
