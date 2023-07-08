import React, { useState } from 'react'
import axios from 'axios';
const ProductForm = (props) => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const {productList, setProductList} = props
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,    // this is shortcut syntax for firstName: firstName,
            price,      // this is shortcut syntax for lastName: lastName
            description,
        })
            .then(res=>{
                console.log(res); // always console log to get used to tracking your data!
                console.log(res.data);
                document.getElementById("title").value = ""
                document.getElementById("price").value = ""
                document.getElementById("description").value = ""
                setProductList([...productList, res.data])
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <div className="container d-flex">
            <form onSubmit = {onSubmitHandler}>
                <h3 className="lessTop">Product Manager</h3>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" onChange = {(e) => setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input type="float" className="form-control" id="price" onChange = {(e) => setPrice(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" id="description" onChange = {(e) => setDescription(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
export default ProductForm;

