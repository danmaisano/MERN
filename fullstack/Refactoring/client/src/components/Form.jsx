import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const Form = (props) => {
  const { productList, setProductList, selectedProduct } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
	const navigate = useNavigate();


  useEffect(() => {
    if (selectedProduct) {
      setTitle(selectedProduct.title);
      setPrice(selectedProduct.price);
      setDescription(selectedProduct.description);
    }
  }, [selectedProduct]);


  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (selectedProduct) {
			axios
        .patch(`http://localhost:8000/api/products/${selectedProduct._id}`, { title, price, description })
        .then((res) => {
          // console.log(res.data);
					navigate(`/products/${selectedProduct._id}`)
        })
        .catch((err) => {
          console.log(err);
        });
		}
		else {
			axios
      .post('http://localhost:8000/api/products', { title, price, description })
      .then((res) => {
        console.log(res.data);
        setTitle('');
        setPrice('');
        setDescription('');
        setProductList([...productList, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
		}
  };

  return (
    <div className="container d-flex">
      <form onSubmit={onSubmitHandler}>
        <h3 className="lessTop">Product Manager</h3>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
