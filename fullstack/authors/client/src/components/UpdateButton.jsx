import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UpdateButton = ({ authorId, updateTarget }) => {
  const navigate = useNavigate()
  const handleUpdate = () => {
    axios
      .patch(`http://localhost:8000/api/${updateTarget}/${authorId}`)
      .then((res) => {
        navigate(`/`)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
		<div className="button-container centerThis">
			<button className="btn btn-primary ms-3" onClick={handleUpdate}>
				Edit
			</button>
		</div>
  );
};

export default UpdateButton;
