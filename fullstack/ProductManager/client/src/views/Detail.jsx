import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom"
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams(); 
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    }, []);
    return (
        <div className='container'>
            <h4 className="topMargin">{product.title}</h4>
            <h5>Price: {product.price}</h5>
            <h5>{product.description}</h5>
            <Link to={`/products/edit/${product._id}`} className='centerThis'>Update this Product</Link>
            <Link to={`/`} className='centerThis'> Go Home </Link>
        </div>
    );
}
export default Detail;

