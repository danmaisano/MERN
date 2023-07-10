import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Form from '../components/form';

const Update = (props) => {  
    const [product, setProduct] = useState({})
    const navigate = useNavigate();
    const { id } = useParams();
    const { setProductList } = props
    const [loaded, setLoaded] = useState(false);

    useEffect (()=> {
        axios.get('http://localhost:8000/api/products/' + id)
          .then(res => {
            setProduct(res.data);
            setLoaded(true);
      })
            .catch(err => console.log(err))
    }, [])

    return (
        loaded && <Form selectedProduct={product} setProductList={setProductList} />
    );  
    
}

export default Update;