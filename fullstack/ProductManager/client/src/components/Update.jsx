import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Update = (props) => {
    
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")

    useEffect(() => {
        axios.get( "http://localhost:8000/api/products/" + id )
            .then(res =>{
                setTitle(res.data.title)
                setDescription(res.data.description)
                setPrice(res.data.price)
            })
            .catch (err => console.log(err));
    },[])
    const UpdateProduct = (e) => {
        e.preventDefault();
        axios.patch( "http://localhost:8000/api/products/" + id, {title, price, description} )
            .then(res => {
                console.log(res);
                navigate("/")
            })
            .catch (err => console.log(err));
    }
    return(
        <div className='topMargin'>
            <h3 className="margin-negative">Update a Product</h3>
            <form onSubmit={UpdateProduct}>
                <p className="centerThisForm">
                    <label className="me-3 fw-bold">Product Title</label>
                    <input className="form-control" type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </p>
                <p className="centerThisForm">
                    <label className="me-3 fw-bold">Price</label>
                    <input className="form-control" type="number" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                </p>
                <p className="centerThisForm">
                    <label className="me-3 fw-bold">Description</label>
                    <textarea  className="form-control" name="title" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                </p>
                <div className="button-container">
                    <button className='btn btn-primary button-container'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Update;