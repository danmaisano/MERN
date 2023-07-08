import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";

const AllProducts = (props) => {
    const { productList, setProductList, removeFromDom } = props;

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/products")
            .then((res) => {
                console.log(res.data);
                setProductList(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <h2 className="centerThis lessTop2">Current Products</h2>
            {productList.map((product) => {
                return (
                    <div key={product._id}>
                        <Link to={`/products/${product._id}`} className="centerThis slightMargin"> {product.title} </Link>
                        <div className="button-container mb-5">
                            <button className="btn btn-warning btn-sm" onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default AllProducts;
