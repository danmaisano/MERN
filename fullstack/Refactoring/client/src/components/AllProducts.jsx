import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import DeleteButton from "./deleteButton";
import axios from "axios";

const AllProducts = (props) => {
    const { productList, setProductList } = props;

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

    return (
        <div className="container">
            <h2 className="centerThis lessTop2">Current Products</h2>
            {productList.map((product) => {
                return (
                    <div key={product._id}>
                        <Link to={`/products/${product._id}`} className="centerThis slightMargin"> {product.title} </Link>
                        <DeleteButton productId={product._id} onDelete={props.deleteProduct} />
                        <hr/>
                    </div>
                );
            })}
        </div>
    );
};

export default AllProducts;
