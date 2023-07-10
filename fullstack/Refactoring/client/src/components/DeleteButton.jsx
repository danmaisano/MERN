import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteButton = ({ productId, onDelete }) => {
  const navigate = useNavigate()
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/products/${productId}`)
      .then((res) => {
        console.log(res);
        onDelete(productId);
        navigate("/")

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
		<div className="button-container centerThis">
			<button className="btn btn-warning btn-sm" onClick={handleDelete}>
				Delete
			</button>
		</div>
  );
};

export default DeleteButton;
