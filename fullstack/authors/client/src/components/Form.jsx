import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import UpdateButton from './UpdateButton';

const Form = (props) => {
  const { selectedAuthor } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
	const navigate = useNavigate();

  useEffect(() => {
    if (selectedAuthor) {
      setFirstName(selectedAuthor.firstName);
      setLastName(selectedAuthor.lastName);
    }
  }, [selectedAuthor]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (selectedAuthor) {
			axios
        .patch(`http://localhost:8000/api/authors/${selectedAuthor._id}`, { firstName, lastName })
        .then(() => {
          console.log("update successful")
        })
        .catch((err) => {
          console.log(err);
        });
		}
		else {
			axios
      .post('http://localhost:8000/api/authors', { firstName, lastName })
      .then((res) => {
        console.log(res.data);
        setFirstName('');
        setLastName('');
        navigate('/')
      })
      .catch((err) => {
        console.log(err);
      });
		}
  };

  return (
    <div className="container">
      {selectedAuthor ? <h3>Update this Author</h3>: ""}
      <form onSubmit={onSubmitHandler}>
        <div className="mb-3 text-start">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3 text-start">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="d-flex">
          {selectedAuthor ? <UpdateButton authorId = {selectedAuthor._id} updateTarget="authors"/> : <button type="submit" className="btn btn-primary"> Submit </button>}
          <button type='button' className="btn btn-secondary ms-2">
                <Link to={'/'} className="text-light">Go Home</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
