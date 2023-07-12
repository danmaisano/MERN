import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DeleteButton = ({ authorId, onDelete }) => {
  const navigate = useNavigate()
  
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/authors/${authorId}`)
      .then(() => {
        onDelete(authorId);
        navigate("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
		<div className="button-container centerThis">
			<button className="btn btn-warning btn-sm ms-3" onClick={handleDelete}>
				Delete
			</button>
		</div>
  );
};

export default DeleteButton;
